import express from "express";
import authMiddleware from "./middleswares/authmiddleware";
import {
  getAll,
  create,
  getUserById,
  deleteUserById,
  updateUserById,
  updateTokenByUserId,
  deleteAll,
  deleteAllTokens,
} from "./controllers/user.controller";
import {
  getTreasuries,
  createTreasury,
  updateCurrent,
  deleteAllTreasuries,
} from "./controllers/treasury.controller";
import { createAdmin, loginAdmin, getAdmin } from "./controllers/admin.controller";
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id", getUserById);
router.put("/user/:id", authMiddleware, updateUserById);
router.put("/usertoken/:id", authMiddleware, updateTokenByUserId);
router.put("/usertokens", authMiddleware, deleteAllTokens);
router.delete("/user/:id", authMiddleware, deleteUserById);
router.delete("/users", authMiddleware, deleteAll);
router.post("/user", authMiddleware, create);

router.get("/treasury", getTreasuries);
router.post("/treasury", authMiddleware, createTreasury);
router.put("/treasury", authMiddleware, updateCurrent);
router.delete("/treasury", authMiddleware, deleteAllTreasuries);

router.get("/admin", authMiddleware, getAdmin);
router.post("/admincreate", createAdmin);
router.post("/adminlogin", loginAdmin);

router.get("*", (req, res) => {
  res.status(404);
  res.send("Not found, sorry.");
});

export default router;
