const express = require("express");
const router = express.Router();
const query = require("../mysql");

const table = "comment";

router.get("/total", async (req, res) => {
  if (req.query.bid) {
    const result = await query({ table, sql: "countComment" }, req.query.bid);
    res.send(result);
  }
});

router.get("", async (req, res) => {
  if (req.query.bid) {
    const limit = req.query.limit ? req.query.limit : 10;
    const offset = req.query.offset ? req.query.offset : 10;
    const result = await query({ table, sql: "selectByBid" }, [
      req.query.bid,
      Number(limit),
      Number(offset),
    ]);
    res.send(result);
  } else {
    const result = await query({ table, sql: "selectList" }, null);
    res.send(result);
  }
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
