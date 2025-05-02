const sqlList = {
  selectList: "SELECT * FROM board",
  selectById: "SELECT * FROM board WHERE id = ?",
  insertBoard: "INSERT board SET ?",
  updateBoard: "UPDATE board SET ? WHERE id = ?",
  deleteBoard: "DELETE FROM board WHERE id = ?",
};

module.exports = sqlList;
