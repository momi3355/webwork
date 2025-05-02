const sqlList = {
  selectList: "SELECT * FROM customers",
  selectById: "SELECT * FROM customers WHERE id = ?",
  insertCustomer: "INSERT customers SET ?",
  updateCustomer: "UPDATE customers SET ? WHERE id = ?",
  deleteCustomer: "DELETE FROM customers WHERE id = ?",
};

module.exports = sqlList;
