/* 캡슐화, 접근(노출) 범위 제어 */
//export를 하면 외부에서 사용이 가능.
function myfunc(msg) {
  console.log(msg);
}

function myinnerfunc(msg) {
  console.log(msg + " inner");
}

function defFunction(msg) {
  console.log("default: ", msg);
}

export default defFunction;
export { myfunc, myinnerfunc };
