function wakeUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve(); //다음 then();
    }, 1000);
  });
}

function washFace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 1000);
  });
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  });
}

//프로미스 객체로 반환하여 .then()를 사용.
//프로미스로 처리(fatch())
function promiseRoutin() {
  wakeUp()
    .then(washFace)
    .then(eatBreakfast)
    .then(() => console.log("4. 준비 끝 🏁"))
    .catch((err) => console.log(err)); //catch() 는 'reject' 객체 값을 출력
}

//await를 사용한 동기식 처리
const morningRoutin = async function () {
  await wakeUp();
  await washFace();
  await eatBreakfast();
  console.log("await 출근 준비 완료");
};

//morningRoutin();
