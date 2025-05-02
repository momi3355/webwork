function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback();
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback();
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback();
  }, 1000);
}

//비동기 처리리
wakeUp(function () {
  washFace(function () {
    eatBreakfast(function () {
      setTimeout(() => {
        console.log("4. 준비 끝 🏁");
      }, 1000);
    });
  });
}); //콜백지옥 예
//콜백지옥은 promise로 해결 가능하다.

// wakeUp(() => washFace(2000));
//인수가 있으면 함수를 다시 만들어서 보내야한다.
