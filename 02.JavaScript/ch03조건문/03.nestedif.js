// 중첩 조건문(Nested If)
/* let year =1900;
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        {
            console.log(`${year}년은 윤년 입니다.`);
        }
        else 
        {
            console.log(`${year}년은 평년입니다.`);

        }
    
    }
    else
    {
        console.log(`${year}년은 윤년 입니다.`);
    }

}
else
{
    console.log(`${year}년은 평년입니다.`);
} */
let year=1900;
if(year%4==0&&year%100!=0||year%400==0){console.log(`${year}년은 윤년 입니다.`);}
else{console.log(`${year}년은 평년입니다.`);}
