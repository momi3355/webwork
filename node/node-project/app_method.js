const express = require("express"); //express는 CommonJS모듈이다.
//express instanse 생성
const app = express();
const port = 3100;

let boards = [
  {
    id: 1,
    title: "공원",
    content: "공원 잠자리",
  },
  {
    id: 2,
    title: "기계",
    content: "인간의 끝",
  },
]; //id, title, content

//body-parse
// json, raw, text, urlencoded
// 클라이언트로부터 전달받은 데이터를 처리하는 함수 제공
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//서버가 get방식으로 전달(app.get('경로', '실행_핸들러'))
//'실행_핸들러'의 매개변수는 req(요청), res(응답)

//경로 '/'
app.get("/", (req, res) => {
  res.send("hello");
});

//전체 조회
app.get("/board", (req, res) => {
  res.send(boards);
});

//단건조회. param:[id]
app.get("/board/:id", (req, res) => {
  res.send(boards.find((e) => e.id == id));
});

//등록
app.post("/board", (req, res) => {
  const board = req.body;
  boards.push(board);
  console.log("get parameter :", board);
  res.send(board);
});

//수정. param:[id]
app.put("/board/:id", (req, res) => {
  const id = req.params.id;
  const board = req.body; //json, form-data
  const idx = boards.findIndex((e) => e.id == id);
  if (idx >= 0) {
    boards[idx] = board;
  }
  res.send(board);
});

//삭제. param:[id]
app.delete("/board/:id", (req, res) => {
  const id = req.params.id;
  const idx = boards.findIndex((e) => e.id == id);
  if (idx >= 0) {
    res.send(boards.splice(idx, 1));
  } else {
    res.send("wrong id");
  }
});

// req.params
// RUST 방식으로 파라미터를 전달 ex) board/1

// req.body
// post로 Form방식으로 받은 객체 ex) board

// req.query
// 주소창에 get방식으로 받는 쿼리 ex) board?title=안녕

//서버 구동(app.listen('포트', '구동콜백'))
app.listen(port, function () {
  console.log(`listening server http://localhost:${port}`);
});
