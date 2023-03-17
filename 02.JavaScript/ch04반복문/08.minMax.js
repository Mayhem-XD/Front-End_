// 배열에서 최대 최소값 찾기
let numbers=[13,57,25,48,7,83,61,22,39];

let maxVal=numbers[0];
for(let i=1;i<numbers.length;i++)
{
    if(maxVal<numbers[i])
    {
        
        maxVal=numbers[i];
        
    }
}

let minVal=1000;
for(let number of numbers)
{
    if(minVal>number)
    {
        minVal=number;
    }
} 

maxVal=numbers[0];
minVal=numbers[0];
for(let number of numbers)
{
    if(maxVal<number)
    {
        maxVal=number;
    }
    if(minVal>number)
    {
        minVal=number;
    }
}



console.log(maxVal);
console.log(minVal);