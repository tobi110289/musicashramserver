import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  console.log("test!");
  res.status(200);
  res.send("hello test");
});
router.get("*", (req, res) => {
  res.status(200);
  res.send("hello world");
});

export default router;
