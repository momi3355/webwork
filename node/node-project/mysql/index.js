const mysql = require("mysql2");
const customer = require("./customerSql");
const board = require("./boardSql");
const comment = require("./commentSql");
const sqlList = { customer: customer, board: board, comment: comment };
//sql 코드가 들어가 있는 모듈

//환경변수에 있는 값
const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
};

let pool = mysql.createPool(conn);

//동기처리를 위한 프로미스화 함수
const query = ({ table, sql }, data) => {
  return new Promise((resolve, reject) => {
    pool.query(sqlList[table][sql], data, (err, result, field) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = query;
