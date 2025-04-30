const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.send("department root");
});
router.post("", (req, res) => {
  res.send("insert root");
});
router.get("/:id", (req, res) => {
  res.send("department root");
});
router.put("/:id", (req, res) => {
  res.send("update root");
});
router.delete("/:id", (req, res) => {
  res.send("delete root");
});

module.exports = router;
