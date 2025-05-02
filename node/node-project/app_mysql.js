const express = require("express");
const morgan = require("morgan");

const app = express();
//const port = 3100;
const port = 80;

//미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(":date[iso] :method :url :status :remote-addr"));

//라우트 설정
app.get("/", (req, res) => {
  res.send("hello");
});
// app.get("/customer", async (req, res) => {
//   const sql = "SELECT * FROM customer";
//   const result = await query(sql, null);
//   //프로미스로 result를 받으면 동기식 처리가 가능.
//   if (err) console.log(err);
//   res.send(result);
// });

//라우터 설정
app.use("/customer", require("./routers/customer"));

app.listen(port, function () {
  console.log(`listening server http://localhost:${port}`);
});
