"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmin = exports.loginAdmin = exports.createAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../prisma"));
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";
async function createAdmin(req, res) {
    const { username, password } = req.body;
    const admin = await prisma_1.default.admin.findUnique({
        where: { username },
    });
    if (admin)
        res.status(409).send({ error: "409", message: "User already exists" });
    try {
        if (password === "")
            throw new Error();
        const hash = await bcrypt_1.default.hash(password, 10);
        const newAdmin = await prisma_1.default.admin.create({
            data: {
                username,
                password: hash,
            },
        });
        const { id } = newAdmin;
        const accessToken = jsonwebtoken_1.default.sign({ id }, SECRET_KEY);
        res.status(201).send({ accessToken });
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.createAdmin = createAdmin;
async function loginAdmin(req, res) {
    const { username, password } = req.body;
    try {
        const admin = await prisma_1.default.admin.findUnique({ where: { username } });
        if (admin) {
            const validatedPass = await bcrypt_1.default.compare(password, admin.password);
            if (!validatedPass)
                throw new Error();
            const accessToken = jsonwebtoken_1.default.sign({ id: admin.id }, SECRET_KEY);
            res.status(200).send({ accessToken, admin: username });
        }
    }
    catch (error) {
        res
            .status(401)
            .send({ error: "401", message: "Username or password is incorrect" });
    }
}
exports.loginAdmin = loginAdmin;
async function getAdmin(req, res) {
    res.status(200).send({ admin: req.admin });
}
exports.getAdmin = getAdmin;
