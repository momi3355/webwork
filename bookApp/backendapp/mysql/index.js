const mysql = require("mysql2");
const bookInfo = require("./bookInfoSql");

const sqlList = { bookInfo };

const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
};

let pool = mysql.createPool(conn);

const query = ({ table, sql }, data) => {
  return new Promise((resolve, reject) => {
    pool.query(sqlList[table][sql], data, (err, result, field) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = query;
