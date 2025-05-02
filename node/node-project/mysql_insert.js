const pool = require("./mysql"); //pool객체를 가지고 올 수 도 있다.
//폴더를 입력하면 자동으로 'index.js' 로 찾아간다.

// 1. DB 접속 체크 (생략가능)
// createPool() 했기 때문에 접속 및 종료를 하지 않아도 된다,
// connection.connect((err) => {
//   if (err) {
//     console.log("error connection" + err.stack);
//     return;
//   }
// });

// 2. SQL 실행
// sql = "insert customers() set ?";
// const data = {
//   name: "안녕",
//   email: "hello@mail.com",
//   phone: "010-1236-4598",
//   address: "안녕하시요",
// };
//set 절을 사용하면 객체가 들어 간다.
//pool.query(sql, data, function (err, results, fields) {

sql = "insert customers(name, email, phone) values(?, ?, ?)";
const data = {
  name: "바이",
  email: "bye@mail.com",
  phone: "010-9865-7845",
};
//values를 사용하면 배열이 들어 간다.
//pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) {

pool.query(
  sql,
  [data.name, data.email, data.phone],
  function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
  }
);
// DB 접속 종료 (비동기이지만 SQL이 모두 실행되면 종료)
//connection.end();
