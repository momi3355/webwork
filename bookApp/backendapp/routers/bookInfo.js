const express = require("express");
const router = express.Router();
const query = require("../mysql");
const table = "bookInfo";

router.get("", async (req, res) => {
  console.log("d");
  const result = await query({ table, sql: "selectList" }, null);
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await query({ table, sql: "selectById" }, req.params.id);
  res.send(result);
});

router.post("", async (req, res) => {
  const result = await query({ table, sql: "insertBookInfo" }, req.body);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const result = await query({ table, sql: "updateBookInfo" }, [
    req.body,
    req.params.id,
  ]);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await query({ table, sql: "deleteBookInfo" }, req.params.id);
  res.send(result);
});

module.exports = router;
