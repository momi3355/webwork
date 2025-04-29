const express = require("express");
const app = express();
const port = 3000;

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

//라우터를 설정가능
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//부서정보 출력
app.get("/emp", (req, res) => {
  res.send(data);
});

//부서가 10번인 첫번째 사원
app.get("/find", (req, res) => {
  res.send("Hello Cart!");
});

// job_id가 'it'인 사원만 조회
app.get("/filter", (req, res) => {
  res.send("Hello Cart!");
});

// firstname 순으로 정렬
app.get("/sort", (req, res) => {
  res.send("Hello Cart!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} http://localhost:${port}/`
  );
});
