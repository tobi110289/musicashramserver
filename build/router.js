"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./controllers/user.controller");
const treasury_controller_1 = require("./controllers/treasury.controller");
const router = express_1.default.Router();
router.get("/users", user_controller_1.getAll);
router.get("/user/:id", user_controller_1.getUserById);
router.put("/user/:id", user_controller_1.updateUserById);
router.put("/usertoken/:id", user_controller_1.updateTokenByUserId);
router.put("/usertokens", user_controller_1.deleteAllTokens);
router.delete("/user/:id", user_controller_1.deleteUserById);
router.delete("/users", user_controller_1.deleteAll);
router.post("/user", user_controller_1.create);
router.get("/treasury", treasury_controller_1.getTreasuries);
router.post("/treasury", treasury_controller_1.createTreasury);
router.put("/treasury", treasury_controller_1.updateCurrent);
router.delete("/treasury", treasury_controller_1.deleteAllTreasuries);
router.get("*", (req, res) => {
    res.status(404);
    res.send("Not found, sorry.");
});
exports.default = router;
