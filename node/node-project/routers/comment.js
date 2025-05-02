const express = require("express");
const router = express.Router();
const query = require("../mysql");

const table = "comment";

router.get("", async (req, res) => {
  const result = await query({ table, sql: "selectList" }, null);
  res.send(result);
});

router.post("", async (req, res) => {
  const result = await query({ table, sql: "insertComment" }, req.body);
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await query({ table, sql: "selectById" }, req.params.id);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const result = await query({ table, sql: "updateComment" }, [
    req.body,
    req.params.id,
  ]);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await query({ table, sql: "deleteComment" }, req.params.id);
  res.send(result);
});

module.exports = router;
