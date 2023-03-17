// 1~10 홀수의 합
let sum=0;
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    sum+=i;
    console.log(`index= ${i} , sum=${sum}`);
}
let numbers = [3,57,25,48,83,79];
let oddSum =0;
for(let number of numbers)
{
    /* if(number %2==0) continue;
    oddSum+=number; */
    if(number%2==1) oddSum+=number;
}
console.log(oddSum);

for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        if(j==2)break; //A위치로 한 단계만 탈출
        // A위치
    }
    //B위치
}