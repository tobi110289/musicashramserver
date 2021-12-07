"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/test", (req, res) => {
    console.log("test!");
    res.status(200);
    res.send("hello test");
});
router.get("*", (req, res) => {
    res.status(200);
    res.send("hello world");
});
exports.default = router;
