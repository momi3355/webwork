const fs = require("fs"); //node.js 기본 패키지

function read() {
  //readFile() 는 비동기
  fs.readFile("C:/temp/data.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("read()", data);
  });
}

function readSync() {
  //readFileSync() 는 동기(그래서 콜백함수가 필요없다.)
  let text = fs.readFileSync("C:/temp/data.txt", "utf-8");
  console.log("readSync()", text);
}

read();
readSync();
console.log("the end");
