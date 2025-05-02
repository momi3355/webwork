const sqlList = {
  selectList: "SELECT * FROM comment ORDER BY created_date DESC",
  selectById: "SELECT * FROM comment WHERE id = ?",
  selectByBid:
    "SELECT * FROM comment WHERE bid = ? ORDER BY created_date DESC LIMIT ? OFFSET ?",
  insertComment: "INSERT comment SET ?",
  updateComment: "UPDATE comment SET ? WHERE id = ?",
  deleteComment: "DELETE FROM comment WHERE id = ?",
  countComment: "SELECT COUNT(*) AS total FROM comment WHERE bid = ?",
};

module.exports = sqlList;
