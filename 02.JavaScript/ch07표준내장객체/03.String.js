// string 객체

let stringFromLiteral ='안녕하세요?';
let stringFromConstructor = new String('안녕하세요?');

// 속성 (attribute,property)
console.log(stringFromLiteral.length);

// 메소드 (method)
let str='안녕하세요?'
console.log(str[0],str.charAt(0));
console.log(str.concat('여러분!'));
console.log(str.indexOf('하'));     //  내가 가진 string에서 'word'가 포함되는지 판별가능
console.log(str.indexOf('가'));

//  디지털 시계, 00:00~23:59
//  하루동안 3이 표시되는 시간은 몇초인가?

let totalSec=0;
for(let i=0;i<24;i++)
{
    for(let j=0;j<60;j++)
    {
        let display=i + ':' + j;
        if(display.indexOf('3')>=0)
        {
            totalSec+=60;
        }
    }
}
console.log(`${totalSec}`);

//  3이 포함되지 않으면 -1 이 나옴

console.log('pineapple'.lastIndexOf('p'));

// 정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를 ㅋㅋ';

let newStr = sample.replace('A','a');
console.log(newStr);
newStr=sample.replace(/[A-Z]/,'대');        //  한개만 바꿈
console.log(newStr);
newStr=sample.replace(/[A-Z]/g,'대');       //  모두 바꿈
console.log(newStr);

// 한글 제거
newStr=sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g,'');
console.log(newStr);
// 한글과 공백만 남기고 모두 제거
newStr=sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g,'');
console.log(newStr);

// 문자열을 분리하여 배열을 반환
let fruitString ='사과,배,감,포도';
let fruitArray=fruitString.split(',');
console.log(fruitArray);

// 문자열 일부분
const today=new Date().toISOString();
console.log(today);
// 2023-03-20T06:52:16.697Z
// deprecated 현재 버전에서는 사용가능이지만 곧 없어질 기능
console.log(today.substring(0,10));     // 날짜 추출 : 2023-03-20
console.log(today.substring(11,19));    //시간 추출
console.log(new Date().getHours());

// 5 -> 05
function toDigit(num)
{
    return (num<10) ? '0'+num : String(num);
}
//YYYY-MM-DD HH-MM-SS 형식으로 만들어주는 함수
function myDatetime()
{
    let now = new Date();
    return (`${now.getFullYear()}-${toDigit(now.getMonth()+1)}-${toDigit(now.getDate())}`+
    `-${toDigit(now.getHours())}:${toDigit(now.getMinutes())}:${toDigit(now.getSeconds())}`)
}
let now=myDatetime();
console.log(now);
console.log(now.substring(2));      //  두번째 인수를 생략하면 끝까지     

console.log('  hello   '.trim());       //  양끝의 공백을 없애줌

console.log('33'.split('3').length);        //  ['','','']
console.log('33'.split('3'));             //  ['','','']
console.log('13131'.split('3'));

console.log('############################');    
//  1에서 1000까지 숫자가 있다. 0은 총 몇번, 1은 몇번, ...9는 몇번 사용되는가?
let str_ ='';
for(let i=1;i<=1000;i++)
{
    str_+=i;
}
for(let i=1;i<10;i++)
{
    let count=str_.split(i).length-1;
    console.log(`${i}는 ${count} 번 사용됨`);
}
console.log('############################');    