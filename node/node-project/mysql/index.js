const mysql = require("mysql2");

const conn = {
  connectionLimit: 10,
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "Password1234",
  database: "shop",
};

let pool = mysql.createPool(conn);

//동기처리를 위한 프로미스화 함수
const query = (sql, data) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, data, (err, result, field) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = query;
