// 생일 - 오늘 현재 만나이 계산
const bYear=2000,bMonth=3,bDay=10;
const today = new Date();
const tYear=today.getFullYear();
const tMonth=today.getMonth()+1;
const tDay=today.getDate();
console.log(tYear ,tMonth ,tDay);
console.log(bYear, bMonth, bDay);
//만나이= 현재년도-출생년도인데 생일이 안지났으면 -1
let age=(tYear-bYear);
let month=(tMonth-bMonth);
let day=(tDay-bDay);
if(month<0 ||(month==0&&day<0))
{
    age--;
}
console.log(`만나이는 ${age}`);