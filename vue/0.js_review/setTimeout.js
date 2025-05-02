//set time out   interval

//타이머 후 한번 실행
setTimeout(function () {
  console.log("타이머 후 한번 실행");
}, 2000); //2000ms 후에 실행

//타이머 반복 실행
setInterval(function () {
  console.log(new Date());
}, 1000);
