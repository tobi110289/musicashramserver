import express from "express";
import controllers from "./controllers";
const router = express.Router();

router.get("/users", controllers.users.getAll);
router.get("/user/:id", controllers.users.getUserById);
router.put("/user/:id", controllers.users.updateUserById);
router.put("/usertoken/:id", controllers.users.updateTokenByUserId);
router.delete("/user/:id", controllers.users.deleteUserById);
router.delete("/users", controllers.users.deleteAll);
router.post("/user", controllers.users.create);
router.get("*", (req, res) => {
  res.status(404);
  res.send("Not found, sorry.");
});

export default router;
