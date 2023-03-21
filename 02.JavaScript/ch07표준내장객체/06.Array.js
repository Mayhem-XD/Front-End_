// Array
// 배열 생성
let fruits =['apple','banana','cherry'];
let cars = new Array('Audi','Benz','BMW','Volvo');
console.log(cars);

// 배열 속성
console.log(fruits.length,cars.length);

// Method
// 1.concat
let newFruits = fruits.concat('orange','mango');
console.log(newFruits);

// 2.join
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);

// 3.pop *
console.log(cars.pop());
console.log(cars);

// 4.push *
cars.push('Hyundai');
console.log(cars);

// 5.reverse *
cars.reverse();
console.log(cars);

// 6.slice      - 시작 인덱스는 포함 마지막 인덱스는 미포함
let germayCars=cars.slice(1);
console.log(cars.slice(1,3));
console.log(germayCars);

// 7.sort *
cars.sort();
console.log(cars);

// 8.splice *
let someFruits =fruits.splice(1,3);
console.log(fruits);
console.log(someFruits);

// sorting
let numbers=[34,56,8,29,94,46,75];
// ascending order
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);
numbers.sort(function(a,b){return b-a;})
console.log(numbers);

// 객체의 배열
let fruitArray =[
    {name:'apple',price:1000},
    {name:'orange',price:2000},
    {name:'cherry',price:3000}
];
// 이름 순으로 오름차순
fruitArray.sort(function(a,b){
    if(a.name<b.name){return -1;}
    if(a.name>b.name){return 1;}
    return 0;
})
console.log(fruitArray);
// 가격의 내림차순
fruitArray.sort(function(a,b){return b.price-a.price;})
console.log(fruitArray);

// isPalindrome() 을 Array Method를 사용하여 만들기
function isPalindrome(str)
{
    let reverStr =str.split('').reverse().join('');
    return str == reverStr;
}
console.log(isPalindrome('기러기'));