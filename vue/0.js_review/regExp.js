/**
 * regExp.js: 정규표현식
 */
// String.search(reg): 시작 인덱스
// String.replace(reg, str): 문자열 교체
// reg.test(String): 페턴이 맞는지 확인

//'i': 대소문자 구분 하지 않음.
//'^': start with
//'$': end with

// '\S' : 공백
// '\d' : 숫자

// [] : 배열 - '-' 에서, ',' 과
function regTest(reg, str) {
  console.log(reg, str, ":", reg.test(str));
}

let text = "Visit W3Schools";
let reg = /w3Schools$/i;
let n = text.search(reg);
console.log(n);
regTest(/^visit/i, text);

//숫자 3자리만
regTest(/^[0-9]{3}$/, "123");
regTest(/^\S[\d]{3}$/, "o123");
regTest(
  //비밀번호
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
  "Password1!"
);
// 이메일
regTest(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "main@mail.com");
regTest(/(<([^>]+)>)/gi, "<title>안녕</title>"); //html 태그 확인
