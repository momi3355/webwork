/**
 * spread.js
 */

let arr = [1, 2, 3];

//얕은 복사
function arrayCopy() {
  let arrcp = arr;
  arrcp[0] = 10;
  //얕은 복사이기 때문에 원본이 변경된다.
  console.log(arr);
  console.log(arrcp);
}

//깊은 복사
function arrayDeepCopy() {
  let arrdeep = [...arr]; //스프레드 연산자를 이용해서 '깊은복사'
  arrdeep[0] = 10;
  //깊은 복사이기 떄문에 원본이 변경되지 않는다.
  console.log(arr);
  console.log(arrdeep);
}

//객체 얕은복사
function objectShallowCopy() {
  let emp = { name: "홍길동", age: 20 };
  let empcp = emp;
  empcp.age = 30;
  console.log(emp);
  console.log(empcp);
}

//객체 깊은복사
function objectDeepCopy() {
  let emp = { name: "홍길동", age: 20 };
  let empdeep = { ...emp, name: "김유신" }; //스프레드 연산자를 이용해서 '깊은복사'
  //변경도 가능하다.
  empdeep.age = 30;
  console.log(emp);
  console.log(empdeep);
}

//가변인수 var
function func(...arg) {
  arg.forEach((e) => console.log(e));
  //func(10, 20, 30, 40);
  //: return
  //10
  //20
  //30
  //40
}

objectDeepCopy();
