/* 3. 가변 변수, 불변 변수
자바스크립트에는 변수 선언하기 위한 키워드가 var 이다
하지만 ES6에서 let, const 가 추가 됨 

* 차이점이 뭘까?
var : 변수를 선언하는 기본 키워드, 변수가 메모리상에 존재하는 기준이 함수, 동일한 이름의 변수를 중복 선언할 수 있음 , 변수에 저장된 값을 변경할 수 있음
let : ES6에서 추가된 변수를 선언하는 키워드, 변수가 메모리상에 존재하는 기준이 코드블럭임, 중복 선언 안됨, 변수에 저장된 값을 변경할 수 있음 
const : ES6 에서 추가된 상수를 선언하는 키워드, 상수가 메모리상에 존재하는 기준이 코드블럭임, 중복 선언 안됨, 상수에 저장된 값(리터럴) 변경할 수 없음 

* ES6에서 변수 선언 시 기본적으로 const 를 사용한다고 생각하면 됨
* const로 먼저 선언 후 해당 변수의 값을 수정해야 하는 경우가 발생 시 let으로 변경 
*/

console.log("\n ----- let 사용 ----- \n");

let num = 1;
num = num * 3;
console.log(num);

let str = '문자';
console.log(str);

str = '다른 문자';
console.log(str);

let arr = [];
console.log(arr);
arr = [1, 2, 3];
console.log(arr);

let obj = {};
console.log(obj);
obj = {name : '새 객체'};
console.log(obj);

console.log("\n ----- const 사용 ----- \n");

const num1 = 1;
console.log(num1);
// num1 = 3; // 이미 생성된 상수에 데이터를 수정 시 오류
// console.log(num1);

const str1 = '문자';
console.log(str1);
// str1 = '새 문자'; // const로 선언하여 상수로 만들어졌기 때문에 데이터 수정이 불가
// console.log(str1);

const arr1 = [];
console.log(arr1);
// arr1 = [1, 2, 3]; // arr1이 const로 선언되었기 때문에 상수로 동작 하여 데이터 수정이 불가능함
// console.log(arr1);

const obj1 = {};
console.log(obj1);
// obj1 = {name : '새 객체'}; // obj1이 const로 선언되었기 때문에 상수로 동작 하여 데이터 수정이 
// console.log(obj1); 

console.log("\n ----- const 사용 시 데이터 수정이 되는 경우 ----- \n");
// 리터럴 타입이 아닌 참조 타입을 건드리는 경우 수정이 가능하다, 번지수만 걸고 넘어지지 않으면 됨~

// const 키워드로 배열 arr2를 상수로 선언 
const arr2 = [];
console.log(arr2);

// js에서 제공하는 배열 함수 push()를 사용하여 데이터 추가
arr2.push(1);
console.log(arr2);

// js에서 제공하는 배열 함수 splice()를 사용하여 데이터 추가
arr2.splice(0, 0, 0);
console.log(arr2);

// js에서 제공하는 배열 함수 pop()을 사용하여 마지막 데이터 삭제 
arr2.pop();
console.log(arr2);

// const 키워드로 변수 obj2를 상수로써 빈 object로 선언
const obj2 = {};
console.log(obj2);

// 기존에 생성된 object 타입의 변수에 key와 값을 추가 
obj2['name'] = '아이유';
console.log(obj2);

// js의 Object 클래스에서 제공하는 assign() 메소드로 object 타입을 합함 
Object.assign(obj2, {old : 31});
console.log(obj2);

// js에서 제공하는 delete 명령으로 obj2의 key와 값 삭제 
delete obj2.name;
console.log(obj2);

/*
ES6에서는 배열 및 object 타입을 const로 선언 후 배열 함수, object 함수를 통해서 내부 데이터를 수정이 가능하지만 그러한 형식으로 수정하는 것을 권장하지 않음 
데이터의 무결성을 해치는 상황이 발생할 수 있으므로 권장하지 않음 
무결성을 지켜주는 내장함수를 사용 
기존 데이터는 그대로 두고 새로운 변수를 생성하여 수정된 데이터를 대입하는 형태로 사용해야 함 
*/

console.log("\n----- 무결성 내장 함수 사용 -----\n");
// 상수로 선언 
const num11 = 1;
const num12 = num11 * 3; // 새 상수를 선언하여 연산된 값을 대입
const str11 = '문자';
const str2 = str11 + '추가';
// 배열 및 object 타입 사용 시 새 상수를 선언하여 데이터를 새로 대입 
const arr13 = [];
// 상수에 저장된 배열을 가져와서 concat() 함수로 데이터를 추가한 후 새 배열로 생성하여 arr14를 생성과 동시에 저장
const arr14 = arr13.concat(1); // 원본은 그대로 두고 새 배열을 생성하는 것 
// 전개 연산자를 사용하여 새 배열을 생성하고 새 배열의 요소로 arr14의 모든 요소와 추가되는 데이터를 새 배열 arr15에 저장 
const arr15 = [...arr14, 2, 3];
// 배열 함수 중 기존 배열의 내용을 바탕으로 새 배열을 생성하는 slice()를 사용하여 특정 영역의 데이터를 가져와서 새 배열로 만들어서 arr16에 저장 
const arr16 = arr15.slice(0, 1);
// 전개 연산자를 사용하여 기존 배열의 내용을 복사하여 변수에 저장 
const [first11, ...arr17] = arr15;
const obj13 = {name : '새 이름', age : 20};
// object 타입의 상수 생성 시 다른 object의 요소를 사용 
const objValue = {name : '새 이름', age : obj13.age};
// 전개 연산자를 사용하여 object 타입이 가지고 있는 요소를 모두 출력 
const obj14 = {...obj13, name : '새 이름'};
const {name, ...obj15} = obj14;

// 가변 내장 함수를 무결성 내장 함수로 바꿔서 사용
// push() -> concat() 사용
// splice() -> slice(), concat()
// pop() -> slice()
// shift() -> slice()