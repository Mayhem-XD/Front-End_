// 1에서 100까지의 합
let sum =0;
for(let i=1;i<=100;i++)
{
    sum+=i;
}
console.log(sum);
// 1에서 10까지 곱
let prod=1;
for(let i=1;i<=10;i++)
{
    prod*=i;
}
console.log(`1~10 정수의 곱 ${prod}\n`);
//  배열의 데이터를 하나의 문자열로 만들 때
let fruits = ['사과','배','귤','딸기'];
let fruitsStr ='';
for (let fruit of fruits)
{
    fruitsStr += fruit;
}
console.log(fruitsStr);




/* let n=0;
function summ(n)
{
    if (n == 1) {return 1} 
    else {return n + summ(n - 1)}
}   
console.log(summ(100)); */
/* let n_ =0;
function prod_(n_)
{
    if(n_==1){return 1}
    else{return n_ * prod_(n_ - 1)}
}
console.log(prod_(10)); */