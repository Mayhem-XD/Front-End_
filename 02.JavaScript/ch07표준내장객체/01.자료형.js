// 기본 자료형 primitive type
let number=273.14;
let string='hello';
let boolean= true;
console.log(typeof(number),typeof(string),typeof(boolean));

//  객체 자료형 - 기본 자료형을 객체로 만든 것을 Wrapper class 라고 함
let numObj = new Number(273.14);
let strObj = new String('Hello');
let boolObj = new Boolean(true);
console.log(typeof(numObj),typeof(strObj),typeof(boolObj));

console.log(number == numObj,number===numObj);  //true false 값은 같지만 자료형이 다르다

let fruits = '사과,딸기,바나나';
console.log(fruits.split(','));
// fruits는 string split method는 ','를 기준으로 string을 분리해서 array로 만듬
// primitive type은 . 찍으면 자동으로 Wrapper class로 바뀜