// 객체(Object)

// 배열(Array)
let fruit=['딸기','사과','수박','참외'];
console.log(typeof(fruit));

let fruitObj={0:'딸기',1:'사과',2:'수박',3:'참외'};     //key(index): value
console.log(fruitObj[0],fruitObj[1]);

// 개체(Object,Python dictionary, Jave Map)
let personArray=['제임스',28,'남자','프로그래머',30.0];
let personInfo =
{
    name:'제임스',age:28,gender:'남자',height:175,job:'프로그래머',bmi:30.0
};
//key가 string인 경우 ''생략 가능
console.log(personArray);
console.log(personInfo);

// 객체에 대한 접근
console.log(personInfo['name']);    //이런 식으로는 사용하지 않음
console.log(personInfo.name);   //대부분 이렇게 사용함 java script에선 가능
let key ='age';
console.log(personInfo[key]);   //key 값을 변수로 부터 받을때 사용