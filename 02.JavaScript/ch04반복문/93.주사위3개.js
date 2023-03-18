let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));
let money;
let sort = [];
sort.push(dice1, dice2, dice3);
let len=sort.length-1;

for(let i=0;i<len;i++)
{
    for(let j=0;j<len-i;j++)
    {
        if(sort[j]>sort[j+1])
        {
            let temp = sort[j];
            sort[j]=sort[j+1];
            sort[j+1]=temp;
        }
    }
}

if (dice1 == dice2 && dice1 == dice3) 
{
        money = 10000 + sort[len] * 1000;
} 
else if (dice1 == dice2 || dice2 == dice3 || dice1 == dice3) 
{        
        money = 1000 + sort[len/2] * 1000; //홀수 일때만
}
else 
{
        money = sort[len] * 100;
}
console.log(` 주사위 ${dice1}, ${dice2}, ${dice3} : ${money}`);

