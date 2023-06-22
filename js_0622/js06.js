/*
객체 확장 표현식, 구조 분해 할당 : ES6에서 추가한 방식
배열, object의 요소를 변수에 대입 시 대입 연산자 왼쪽에 변수명을 나열하고, 오른쪽에는 배열 및 object 변수를 위치시켜서 배열 및 object 변수의 요소를 차례때로 대입시키는 방식.
*/

console.log("\n ----- ES5의 구조 분해 할당 ----- \n"); 

var list = [0, 1];
console.log("원본 배열 : ");
console.log(list);
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

console.log(`item1 : ${item1}`);
console.log(`item2 : ${item2}`);
console.log(`item3 : ${item3}`);

console.log(`스왑 전 item 1 : ${item1}, item2 : ${item2}`);

var temp = item2;
item2 = item1;
item1 = temp;

console.log(`스왑 후 item 1 : ${item1}, item2 : ${item2}`);

var obj = {key1 : 'one', key2 : 'two'};
console.log("원본 obj : ");
console.log(obj);

// object 타입의 변수 obj의 값을 각각의 변수에 대입 
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'
var newKey1 = obj.key1; // 새 변수 newKey1에 object의 key1의 값을 대입 
console.log(`key 1 : ${key1}, key2 : ${key2}, key3 : ${key3}, newKey1 : ${newKey1}`);

console.log("\n ----- ES6의 구조 분해 할당 ----- \n"); 

var list = [0, 1];
console.log("원본 배열 : ");
console.log(list);

// ES6의 구조 분해 할당을 사용하여 변수에 데이터 대입
var [item1, item2, item3 = -1] = list;
console.log(`item1 : ${item1}, item2 : ${item2}, item3 : ${item3}`);

console.log(`스왑 전 item1 : ${item1}, item2 : ${item2}`);
// ES6 에서는 구조 분해 할당을 사용하여 임시 변수 없이 데이터의 스왑이 가능함 
[item1, item2] = [item2, item1];
console.log(`스왑 후 item1 : ${item1}, item2 : ${item2}`);

var obj = {key1 : 'one', key2 : 'two'};
console.log("원본 obj : ");
console.log(obj);

// ES6의 구조 분해 할당 방식을 사용하여 각각의 변수에 값을 대입 
// obj의 key 이름과 동일한 이름의 변수에 값을 대입 
// 동일한 key 이름이 없으면 지정한 기본값을 사용 
// obj의 key 이름과 동일한 이름의 변수에 ': 새 변수명'을 사용시 동일한 이름의 key값이 새 변수에도 대입됨 
var {key1 : newKey1, key2, key3 = 'defualt key3 value'} = obj
console.log(`key1 : ${key1}, key2 : ${key2}, key3 : ${key3}, newKey1 : ${newKey1}`);

/*
확장 표현식 : ES6에서 제공되는 표현식으로 object 타입의 key에 변수의 값을 대입할 경우 key 이름과 변수의 이름이 같으면 key 이름을 생략 가능하다. 
object 타입의 요소로 함수를 사용 시 function 키워드 생략 가능 
*/

console.log("\n\n ----- ES5 확장 표현식 -----\n ");

var x = 0;
var y = 0;
// 변수 이름과 object 타입의 key 이름이 같을 경우 
var obj = {x : x, y : y}; // object 타입의 데이터 생성 
console.log(obj);

// ES5에서는 object 타입에 메소드를 요소로 입력 시 key 이름 : 익명함수(){} 형태로 사용 
var obj2 = {
  x : x,
  methodA : function(){
    console.log("method A");
  },
  methodB : function(){
    return 0;
  },
};

console.log(obj2);

var randomKeyString = "other";
var combined = {}; // 빈 object 타입 선언

// ES5에서 object 타입에 key와 value를 추가하는 방식  
// combined['oneother'] = 'some value';
combined["one" + randomKeyString] = "some value";
console.log(combined);

console.log("\n----- ES6 확장 표현식 -----\n");

var x = 0;
var y = 0;
// object 타입의 key 이름과 value로 사용되는 변수의 이름이 같으면 key 이름 생략 가능 
// key 이름을 생략 시 변수 이름이 key이름으로 사용된다. 
var obj = {x, y};
console.log(obj);

// ES6에서는 object 타입의 요소로 함수를 추가 시 '함수명(){}' 형식으로 사용
var obj2 = {
  x, 
  methodA(){
    console.log("methodA");
  }, 
  methodB(){
    return 0;
  }
}

console.log(obj2);

var randomKeyStrong = "other";
// ES6에서는 빈 object 타입의 선언 없이 바로 생성 가능하다. 
var combined = {["one" + randomKeyString] : "some value"};
console.log(combined);
