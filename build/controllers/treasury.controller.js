"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllTreasuries = exports.updateCurrent = exports.createTreasury = exports.getTreasuries = void 0;
const prisma_1 = __importDefault(require("../prisma"));
async function getTreasuries(req, res) {
    try {
        const treasuryData = await prisma_1.default.treasury.findMany();
        res.status(200);
        res.send(treasuryData);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.getTreasuries = getTreasuries;
async function updateCurrent(req, res) {
    try {
        await prisma_1.default.treasury.updateMany({
            where: { current: true },
            data: {
                amount: {
                    increment: req.body.amount,
                },
            },
        });
        res.sendStatus(204);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.updateCurrent = updateCurrent;
async function createTreasury(req, res) {
    try {
        await prisma_1.default.treasury.updateMany({
            data: {
                current: false,
            },
        });
        const newTreasury = await prisma_1.default.treasury.create({
            data: {
                amount: 0,
                distributionDate: req.body.date,
                current: true,
            },
        });
        res.status(201);
        res.send(newTreasury);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.createTreasury = createTreasury;
async function deleteAllTreasuries(req, res) {
    try {
        await prisma_1.default.treasury.deleteMany({});
        res.sendStatus(204);
    }
    catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}
exports.deleteAllTreasuries = deleteAllTreasuries;
