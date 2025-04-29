import axios from "axios";

//비동기 : ajax
async function getBoard() {
  let res = await axios(`http://localhost:3000/board/1`);
  console.log(res);
}

getBoard();
console.log("1", "the end");
