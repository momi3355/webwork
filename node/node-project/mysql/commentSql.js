const sqlList = {
  selectList: "SELECT * FROM comment",
  selectById: "SELECT * FROM comment WHERE bid = ?",
  insertComment: "INSERT comment SET ?",
  updateComment: "UPDATE comment SET ? WHERE id = ?",
  deleteComment: "DELETE FROM comment WHERE id = ?",
};

module.exports = sqlList;
