"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const router = express_1.default.Router();
router.get("/users", controllers_1.default.users.getAll);
router.get("/user/:id", controllers_1.default.users.getUserById);
router.put("/user/:id", controllers_1.default.users.updateUserById);
router.put("/usertoken/:id", controllers_1.default.users.updateTokenByUserId);
router.delete("/user/:id", controllers_1.default.users.deleteUserById);
router.delete("/users", controllers_1.default.users.deleteAll);
router.post("/user", controllers_1.default.users.create);
router.get("*", (req, res) => {
    res.status(404);
    res.send("Not found, sorry.");
});
exports.default = router;
