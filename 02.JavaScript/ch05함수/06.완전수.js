// perfect number
// 자기 자신을 제외한 약수의 합 = 자기자신
// 6 = 1+2+3
// 28=1+2+4+7+14
// 2~10000 까지 

// 1 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num)
{
    let sum = 0;
    for(let i=1;i<num;i++)
    {
        if(num%i==0)
        {
            sum+=i;
        }
    }
    return sum;
}
// 2 2~10000 사이의 완전수 구하기
for(let i=2;i<=10000;i++)
{
    if(i==sumOfDivisors(i))
    {
        console.log(i);
    }
}