const sqlList = {
  selectList: "SELECT * FROM book_info",
  selectById: "SELECT * FROM book_info WHERE id = ?",
  insertBookInfo: "INSERT book_info SET ?",
  updateBookInfo: "UPDATE book_info SET ? WHERE id = ?",
  deleteBookInfo: "DELETE FROM book_info WHERE id = ?",
};

module.exports = sqlList;
