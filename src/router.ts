import express from "express";
import {
  getAll,
  create,
  getUserById,
  deleteUserById,
  updateUserById,
  updateTokenByUserId,
  deleteAll,
} from "./controllers/user.controller";
import {
  getTreasuries,
  createTreasury,
  updateCurrent,
  deleteAllTreasuries,
} from "./controllers/treasury.controller";
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUserById);
router.put("/usertoken/:id", updateTokenByUserId);
router.delete("/user/:id", deleteUserById);
router.delete("/users", deleteAll);
router.post("/user", create);

router.get("/treasury", getTreasuries);
router.post("/treasury", createTreasury);
router.put("/treasury", updateCurrent);
router.delete("/treasury", deleteAllTreasuries);

router.get("*", (req, res) => {
  res.status(404);
  res.send("Not found, sorry.");
});

export default router;
