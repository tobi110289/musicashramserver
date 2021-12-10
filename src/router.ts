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
import { createAdmin, loginAdmin } from "./controllers/admin.controller";
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUserById);
router.put("/usertoken/:id", updateTokenByUserId);
router.put("/usertokens", deleteAllTokens);
router.delete("/user/:id", deleteUserById);
router.delete("/users", deleteAll);
router.post("/user", create);

router.get("/treasury", getTreasuries);
router.post("/treasury", createTreasury);
router.put("/treasury", updateCurrent);
router.delete("/treasury", authMiddleware, deleteAllTreasuries);

router.post("/admincreate", createAdmin);
router.post("/adminlogin", loginAdmin);

router.get("*", (req, res) => {
  res.status(404);
  res.send("Not found, sorry.");
});

export default router;
