const express = require("express"); //express는 CommonJS모듈이다.
const multer = require("multer"); //multers

//파일명 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "c:/temp/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

//express instanse 생성
const app = express();
//const port = 3100;
const port = 80;

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

//로그 미들웨어 morgan
//npm install morgan
const morgan = require("morgan");
app.use(morgan(":date[iso] :method :url :status :remote-addr"));

//파일업로드 미들웨어 multer
//npm install multer
app.post("/profile", upload.single("avatar"), function (req, res) {
  console.log(req.file.originalname);
  console.log(req.file.filename);
  console.log(req.file.size);
  res.send("ok");
});

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
    //Array.splice() 원본이 교체된다.
    //res.send(boards.splice(idx, 1));
    //Array.filter() 세로운 배열을 만든다.
    boards = boards.filter((e) => e.id != id);
    res.send(boards);
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

let emps = [
  { id: 0, name: "길동" },
  { id: 1, name: "순신" },
];
//route() 같은 리소스(url) method 종류별로 라우트를 지정.
app
  .route("/emp")
  .get((req, res) => {
    res.send(emps);
  })
  // .get((req, res) => {
  //   res.send(emps[req.query.id]);
  // })
  .post((req, res) => {
    emps.push(req.body);
    res.send(req.body);
  })
  .put((req, res) => {
    emps[req.body.id] = req.body;
    res.send(req.body);
  })
  .delete((req, res) => {
    emps = emps.filter((e) => e.id == emps.findIndex(req.body.id));
    res.send(req.body);
  });

//파일 다운로드
app.get("/download", (req, res, next) => {
  //express.urlencoded("한글.jpg"); //한글파일이면 인코딩해야한다.
  const filepath = "c:/temp/uploads/";
  const download = "common.jpg";
  res.setHeader("Content-Disposition", `attachment; filename=${download}`);
  res.sendFile(filepath + download);
});

//라우터를 추가 기본경로는 '/product'
app.use("/product", require("./routers/product"));
app.use("/dept", require("./routers/dept"));

//미들웨어(요청과 응답 사이의 함수.)
// 미들웨어 함수는 요청 객체, 응답 객체 그리고
// 애플리케이션의 요청-응답 주기에서 다음 함수에 접근할 수 있는 함수.

//서버 구동(app.listen('포트', '구동콜백'))
app.listen(port, function () {
  console.log(`listening server http://localhost:${port}`);
});
