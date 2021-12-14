"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";
const prisma_1 = __importDefault(require("../prisma"));
const authMiddleware = async (req, res, next) => {
    const authHeaders = req.headers["authorization"];
    if (!authHeaders)
        return res.sendStatus(403);
    const token = authHeaders.split(" ")[1];
    try {
        const { id } = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        const admin = await prisma_1.default.admin.findUnique({ where: { id } });
        if (!admin)
            return res.sendStatus(401);
        req.admin = admin.username;
        next();
    }
    catch (error) {
        res
            .status(401)
            .send({ error: "401", message: "admin needs to be logged in" });
    }
};
exports.default = authMiddleware;
