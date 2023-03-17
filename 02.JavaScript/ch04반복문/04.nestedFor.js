// 사각형 그리기
/* for(let i=0;i<5;i++)
{
    let star='';
    for(let j=0;j<5;j++)
    {
        star+='*';
    }
    console.log(star);
} */


// 마름모 그리기(1사분면)
/* for(let i=1;i<=5;i++)
{
    let star='';
    for(let j=0;j<i;j++)
    {
        star+='*';
    }
    console.log(star);
} */
// 마름모(4사분면)
/* for(let i=5;i>=0;i--)
{
    let star='';
    for(let j=0;j<i;j++)
    {
        star+='*';
    }
    console.log(star);
}
 */
// 마름모(2사분면)
for(let i=1;i<=5;i++)
{
    star='';
    for(let j=0;j<5-i;j++)
    {
        star+=' ';
    }
    for(let j=0;j<i;j++)
    {
        star+='*';
    }
    console.log(star);
}
// 마름모(3사분면)
for(let i=5;i>=0;i--)
{
    star='';
    for(let j=0;j<5-i;j++)
    {
        star+=' ';
    }
    for(let j=0;j<i;j++)
    {
        star+='*';
    }
    console.log(star);
}