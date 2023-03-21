let today = new Date();
console.log(today);
console.log(today.toDateString());  //Tue Mar 21 2023
console.log(today.toLocaleString());
//console.log(today.toDateString());

function toDigit(num)
{
    return (num<10) ? '0'+num : String(num);
}
//YYYY-MM-DD HH-MM-SS 형식으로 만들어주는 함수
function myDatetime(date)
{
    
    return (`${date.getFullYear()}-${toDigit(date.getMonth()+1)}-${toDigit(date.getDate())}`+
    ` ${toDigit(date.getHours())}:${toDigit(date.getMinutes())}:${toDigit(date.getSeconds())}`)
}



// 2. Unix time 기준(1970 01 01 이후 ms 단위)
let unixDay = new Date(1.6794e12);  //2023-03-21
console.log(unixDay);

//  3. 문자열 기반
let strDate = new Date('2023-03-21 09:25:00');
console.log(strDate);   

// 4. 날짜/시간 요소 기반
let elementDay =new Date(9999,09,29,9,30,0,0);
console.log(elementDay);

// 시간 연산

// 더하기/빼기 
today.setDate(today.getDate()+100);
console.log(myDatetime(today));
today.setDate(today.getDate()-100);
console.log(myDatetime(today));

// 오늘: 1년 2개월 3일 후
let date =new Date();
date.setFullYear(date.getFullYear()+1);     //  1년후
date.setMonth(date.getMonth()+2);           //  2개월후
date.setDate(date.getDate()+3);             //  3일 후
console.log(myDatetime(date));


let chrismas = new Date(2023,11,25);        //  month는 0부터 시작
let diffMs = chrismas.getTime()-today.getTime();
let diffDay=Math.ceil(diffMs/(24*60*60*1000));
console.log(diffDay);

// 수능일 : 2023-11-16
diffMs=new Date(2023,10,16).getTime()-today.getTime();
diffDay=Math.ceil(diffMs/(24*60*60*1000));
console.log(diffDay);

// 어제 날짜로 부터 경과일
diffMs=today.getTime() - new Date(2023,2,20).getTime();
diffDay=Math.floor(diffMs/(24*60*60*1000));
console.log(diffDay);