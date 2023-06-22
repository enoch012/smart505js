// ES6 : ECMA2015를 다른 식으로 표현한 것, 기존에 배웠던 문법은 ES5 문법임
// 현재 ECMA2022까지 발표됨
// 왜 ES6를 써야하는가? 
// ES5에서 ES6로 넘어갈 때 많은 부분이 추가됨, 그 이후로는 크게 변경된 것이 없음 
// 프론트 엔드 프레임워크인 React.js, Vue.js(Vue3)에서 ES6 버전을 기본 자바스크립트 버전으로 사용함 
// ES6의 모든 것을 알고 싶다 > https://www.w3schools.com/js/js_es6.asp

// ES6 문법
// 1. 템플릿 문자열
// 2. 전개 연산자
// 3. 가변 변수(let), 불변 변수(const) 
// 4. 클래스
// 5. 화살표 함수
// 6. 객체 확장 표현식, 구조 분해 할당
// 7. 라이브러리 의존성 (import)
// 8. 배열 함수 
// 9. 비동기 함수 
// 10. async / await

/* 1. 템플릿 문자열 - 기존의 자바스크립트 문자열 사용 방식은  "", '' 안에 문자열을 입력하여 사용하는 방식, 2개 이상의 문자열을 연결하거나 문자열 사이에 변수가 들어가야 할 경우 문자열 연결 연산자인 + 를 사용하여 문자열을 생성 
ES6에서 지원되는 템플릿 문자열을 사용하면 문자열 사이에 변수가 들어갈 경우 문자열 연결 연산자가 필요 없음 
* 사용법 : '', "" 대신 ``(백틱)을 사용하여 문자열을 감싸기 
문자열 사이에 변수가 들어갈 경우 ${변수명} 형태로 사용 */

var string1 = '안녕하세요.';
var string2 = '반갑습니다.';
var greeting = string1 + " " + string2;

console.log(greeting);

var product = {name : "도서", price: "4200원"};
var message = "제품 " + product.name + "의 가격은 " + product.price + "입니다.";

console.log(message);

var multiLine = '문자열1\n문자열2';

console.log(multiLine);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + (value1 * value2) + '입니다.';
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';

console.log(operator1);
console.log(operator2);

console.log("\n ----- ES6 문법, 템플릿 문자열 ----- \n");
var string1 = '안녕하세요';
var string2 = '반갑습습니다.';
var greeting = `${string1} ${string2}`;

console.log(greeting);

var product = {name : "도서", price : '4200원'}
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
console.log(message);

var multiLine = `문자열1
문자열2`;

console.log(multiLine);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `불리언 값은 ${boolValue ? "참" : "거짓"}입니다.`;
console.log(operator1);
console.log(operator2);

console.log("\n\n");

/* 2. 전개 연산자 - ES6에서 추가된 연산자로 배열, 객체, 변수명 앞에 ... 을 사용하여 해당 변수의 내용을 전개하여 출력함 */

console.log("\n ----- ES5문법 ----- \n");

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(combined);

// array1 번에 array2번을 합치기
var combined = array1.concat(array2);
console.log(combined);

// concat을 사용하여 빈 배열에 매개변수로 사용된 배열을 모두 합함 
var combined = [].concat(array1, array2);
console.log(combined);

// 배열의 요소를 변수에 대입 
var first = array1[0];
var second = array1[1];
// 배열의 요소를 변수에 대입 시 지정한 index가 없을 경우 뒤에 지정된 값을 기본으로 사용하라
var three = array1[2] || 'empty'; // 자바스크립트 에서만 됨 

console.log(first);
console.log(second);
console.log(three);

console.log("\n ----- ES6문법 ----- \n");
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
// 전개 연산자를 사용하여 배열 array1의 모든 요소와 배열 array2의 모든 요소를 합하여 combined에 대입, 하나의 배열로 생성함 
// var combined = [array1[0], array1[1], array2[0], array2[1]] 와 같은 모양이 됨
var combined = [...array1, ...array2];
console.log(combined);

// 전개 연산자를 사용하여 대입 연산자 왼쪽에 있는 변수에 값을 하나씩 대입해 줌 
// 왼쪽의 변수 three에는 기본값으로 empty를 지정 값이 없을 경우 들어감
// ...others : 나머지를 다 받도록 하는 변수이기 때문에 배열로 동작함, 현재는 값이 없기 때문에 빈 배열이 됨 
var [first, second, three = 'empty', ...others] = array1;
console.log(first);
console.log(second);
console.log(three);
console.log(others);

console.log("\n ----- ES5 문법, object 사용 시 ----- \n");

var objOne = {one : 1, two : 2, others : 0};
var objTwo = {three : 3, four : 4, others : -1};
var combined = {one : objOne.one, two : objOne.two, three : objTwo.three, four : objTwo.four};
console.log(combined)

// javascript 의 Object 클래스에서 지원하는 assign() 메소드를 사용하여 하나의 object 타입으로 합함 
// 두개이상의 배열이 object 타입을 하나의 object 타입으로 합할 경우에 동일한 key 가 존재 나중에 입력되는 object 타입의 데이터를 이용함 
// 나중에 입력되는 값이 기존의 값을 다움
var combined = Object.assign({}, objOne, objTwo);
console.log(combined);

var combined = Object.assign({}, objTwo, objOne);
console.log(combined);

// 변수 others에 Object 클래스에서 제공하는 assign 메소드를 사용하여 objects 타입인 bomcined를 빈 object에 합함, combined의내용이  others에 저장됨
var others = Object.assign({}, combined);
console.log(combined)

delete others.other;
console.log(others);

console.log("\n ----- ES6 문법, object 사용 시 ----- \n");

var objOne = {one : 1, two : 2, other : 0};
var objTwo = {three : 3, four : 4, other : -1};
// 전개 연산자를 사용하여 변수 combined에 object 타입의 변수 objOne, objtwo의 값을 모두 합하여 복사 
// Object.assign()을 사용하는 것과 동일하게 동일한 키가 있을 경우 나중에 복사된 값으로 대체됨
var combined = {...objOne, ...objTwo};
console.log(combined);

var combined = {...objTwo, ...objOne};
console.log(combined);

// 전개 연산자를 사용하여 대입연산자 오른쪽에 있는 object 타입의 데이터를 하나씩 꺼내어 대입 연산자 왼족에 있는 변수에 동일한 key 이름으로 대입함 
// 왼쪽에 전개 연산자를 사용한 변수가 있을 경우 나머지 값이 다 들어감 
var {other, ...others} = combined;
console.log(other);
console.log(others);