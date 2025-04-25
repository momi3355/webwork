import * as myModule from "./my_module.js"; //모듈의 모든 함수를 불러옴
//import { myfunc } from "./my_module.js"; //모듈의 각각 불러옴
//import def from "./my_module.js"; //모듈의 기본 함수를 불러옴

//defFunction("기본 함수"); 함수가 export 가 아니기 때문에 사용불가
myModule.myinnerfunc("묘튤 테스트");
