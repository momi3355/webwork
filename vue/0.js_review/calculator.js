const defaultValue = 1;

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

//CommonJS 모듈(node.js)
module.exports = {
  defaultValue,
  add,
  minus,
};
