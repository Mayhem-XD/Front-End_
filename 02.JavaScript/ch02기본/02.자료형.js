//1. number
console.log(5/2);
console.log(5%2);
console.log(2**10); 
// 2. 문자열
console.log("She said \"I Love You\"");
console.log("She \tsaid \n\"I Love You\"");
console.log('\\');
let hello='안녕하세요?';
console.log(hello[0],hello[5]);
// template literal(`)
let a=2;let b=3;
console.log('a 더하기 b을 한 결과는 '+2+3+' 입니다.');
console.log(`${a} 더하기 ${b}을 한 결과는 ${a+b} 입니다.`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`)
// 3. 논리형(Bool)
console.log(typeof(true),typeof false);
console.log(2==2.0, 5>=4,`가나다`>'마바사');
let x=10;
console.log(x>8 ||x<-3);
console.log(x>=0 && x <=5);
console.log(true>10); // true가 1로 자동 변환되어 비교가 됨
