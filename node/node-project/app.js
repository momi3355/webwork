const express = require("express");
const app = express();
const port = 3100;

//json-server의 emp
let data = [
  {
    id: "1",
    first_name: "Massimiliano",
    last_name: "Rosoni",
    email: "mrosoni0@ibm.com",
    salary: "$9.23",
    department_id: 10,
    job_id: "it",
  },
  {
    id: "2",
    first_name: "Rikki",
    last_name: "Red",
    email: "rred1@nps.gov",
    salary: "$9.96",
    department_id: 20,
    job_id: "sales",
  },
  {
    id: "3",
    first_name: "Datha",
    last_name: "Loosemore",
    email: "dloosemore2@behance.net",
    salary: "$6.59",
    department_id: 30,
    job_id: "it",
  },
  {
    id: "4",
    first_name: "길동",
    last_name: "Loton",
    email: "eloton3@dagondesign.com",
    salary: "$3.38",
    department_id: 10,
    job_id: "it",
  },
];

function notFound() {
  return "element not found 😥";
}

//라우터를 설정가능
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//사원정보 출력(전체)
app.get("/emp", (req, res) => {
  res.send(data);
});

//사원정보 출력(단건) -> REST방식
//REST: 클라이언트와 서버 간 통신에서 리소스의 상태와 표현
//파라미터 'id'
app.get("/emp/:id", (req, res) => {
  let id = req.params.id; //req에 파라미터가 저장되어 있다.
  let result = data.find((e) => e.id === id);
  if (result) {
    res.send(result);
  } else {
    res.send(notFound());
  }
});

//부서정보 검색
app.get("/find", (req, res) => {
  let deptId = req.query.dept; // '/find?dept=10'
  //주소에 '?'를 적는 방식을 쿼리라고 한다.
  let result = data.find((e) => e.department_id == deptId);
  //10 == '10' 타입이 다르기때문에 '=='을 해준다.
  if (result) {
    res.send(result);
  } else {
    res.send(notFound());
  }
});

//일정보 검색
app.get("/filter", (req, res) => {
  let job = req.query.job; // '/filter?job=it'
  let result = data.filter((e) => e.job_id === job);
  //없으면 '[]'
  if (result.length > 0) {
    res.send(result);
  } else {
    res.send(notFound());
  }
});

// firstname 순으로 정렬
app.get("/sort", (req, res) => {
  //data.sort((a, b) => b.first_name.localeCompare(a.first_name));
  data.sort((a, b) => a.first_name.localeCompare(b.first_name));
  res.send(data);
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} http://localhost:${port}/`
  );
});
