const express = require("express");
const query = require("../mysql");
const router = express.Router();

router.get("", async (req, res) => {
  const sql = "SELECT * FROM customers";
  const result = await query(sql, null);
  res.send(result);
});

router.post("", async (req, res) => {
  const sql = "INSERT customers SET ?";
  //INSERT customers(name, email, phone, address) value(?, ?, ?, ?)
  const result = await query(sql, req.body);
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const sql = "SELECT * FROM customers WHERE id = ?";
  const result = await query(sql, req.params.id);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const sql = "UPDATE customers SET ? WHERE id = ?";
  // UPDATE customers
  // SET name = ?, email = ?, phone = ?, address = ?
  //식으로 해도 되고 'SET ?'하면 객체가 들어가면 된다.
  const result = await query(sql, [
    req.body,
    req.params.id, //where
  ]);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const sql = "DELETE FROM customers WHERE id = ?";
  const result = await query(sql, req.params.id);
  res.send(result);
});

module.exports = router;
