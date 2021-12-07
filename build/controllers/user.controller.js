"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.updateTokenByUserId = exports.updateUserById = exports.deleteUserById = exports.getUserById = exports.create = exports.getAll = void 0;
const prisma_1 = __importDefault(require("../prisma"));
async function getAll(req, res) {
    try {
        const users = await prisma_1.default.user.findMany();
        res.status(200);
        res.send(users);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.getAll = getAll;
async function getUserById(req, res) {
    try {
        const user = await prisma_1.default.user.findUnique({
            where: { id: +req.params.id },
        });
        res.status(200);
        res.send(user);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.getUserById = getUserById;
async function updateUserById(req, res) {
    try {
        const user = await prisma_1.default.user.update({
            where: { id: +req.params.id },
            data: req.body,
        });
        res.status(200);
        res.send(user);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.updateUserById = updateUserById;
async function updateTokenByUserId(req, res) {
    try {
        const user = await prisma_1.default.user.update({
            where: { id: +req.params.id },
            data: {
                tokens: {
                    increment: req.body.amount,
                },
            },
        });
        res.status(200);
        res.send(user);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.updateTokenByUserId = updateTokenByUserId;
async function deleteUserById(req, res) {
    try {
        await prisma_1.default.user.delete({
            where: { id: +req.params.id },
        });
        res.sendStatus(204);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.deleteUserById = deleteUserById;
async function create(req, res) {
    try {
        const newUser = await prisma_1.default.user.create({ data: req.body });
        res.status(201);
        res.send(newUser);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.create = create;
async function deleteAll(req, res) {
    try {
        const deleteUsers = await prisma_1.default.user.deleteMany({});
        res.status(201);
        res.send(deleteUsers);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.deleteAll = deleteAll;
