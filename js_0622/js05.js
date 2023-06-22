/*
화살표 함수 : ES6 에서 추가된 함수 생성 방식
=> 기호를 사용하여 함수를 생성함 
*/

// 기존 함수 생성 방법 1, functin 키워드와 함수명을 사용하여 생성
function fun01(){
  console.log("ES5의 함수 생성 방법 1");
}

fun01();

// 기존 함수 생성 방법 2, 변수에 익명함수를 대입하여 함수를 생성
var fun02 = function(){
  console.log("ES5의 함수 생성 방법 2");
}

fun02();

console.log("\n ----- ES6 화살표 함수 ----- \n");

// ES6의 화살표 함수 생성 방법
// () 와 =>, 코드블럭을 사용하여 함수를 생성하고 변수에 대입 
var fun03 = () => {
  console.log("ES6의 함수 생성 방법 1");
}

fun03();

// 함수의 내용이 return만 존재할 경우 코드 블럭을 생략할 수 있다.
var fun04 = () => {
  return console.log("ES6의 함수 생성 방법 2");
}

var fun05 = () => console.log("ES6의 함수 생성 방법 3"); // 한줄일 경우 바로 리턴됨 

fun04();
fun05();

// 화살표 함수의 ()는 매개변수를 입력하는 부분 
// 매개변수가 1개일 경우 ()를 생략할 수 있다. 매개변수가 없거나 두개 이상이면 써야함 
var fun06 = (value) => {
  return "Hello " + value;
}

var fun07 = value => "Hello " + value;

console.log(fun06("화살표함수"));
console.log(fun07("화살표함수"));

const fun09 = (num1, num2) => num1 * num2;
console.log(fun09(85,97));

function fun12(num) {
  return function (value){
    return num + value;
  }
}

console.log(fun12(3)(10));

var fun13 = num => value => num + value;
console.log(fun13(5)(67));