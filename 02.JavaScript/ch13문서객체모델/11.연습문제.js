function ans1()
{
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if(num1<1||num1>20||num2<1||num2>30||(num2-num1)<4)
    {
        alert('입력값의 범위를 확인하고 다시 입력하세요');
        return;
    }
    let powerArr =[];
    for (let i=num1;i<=num2;i++)
    {
        powerArr.push(Math.pow(2, i));
    }
    let resultStr='';
    //1줄씩 <br>삽입
    // for (let power of powerArr)     
    // {
    //     resultStr+=power + '<br>'
    // }
    //4개 출력후 줄바꿈
    for (let i =0;i<powerArr.length;i++)
    {
        if ((i+1)%4==0)
        {
            resultStr += powerArr[i] +'<br>';
        }
        else
        {
            resultStr += powerArr[i] + ',';
        }
    }
    document.getElementById('result1').innerHTML=resultStr;
}

function ans2()
{
    let text = document.getElementById('sentence').value;
    let noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ').toLowerCase();
    let words=noPunct.split(' ');
    let count=0;
    for (let word of words)
    {
        if(word=='the')
        {
            count++;
        }
    }
    document.getElementById('result2').innerHTML=`the의 갯수는 ${count} 입니다.`;

}

function ans3()
{
    let priceStr = document.getElementById('price').value;
    let prices = priceStr.split(';');       //prices는 배열, element는 string
    // let newPrices=[];
    // for (let price of prices)
    // {
    //     newPrices.push(Number(price));
    // }
    //각각의 값에 대해 parseInt 한 값 보내기
    let newPrices=prices.map((x)=>parseInt(x));
    newPrices.sort((a,b)=>(b-a));
    let resultStr='';
    for (let i =0;i<newPrices.length;i++)
    {
        if ((i+1)%4==0)
        {
            resultStr += newPrices[i] +'<br>';
        }
        else
        {
            resultStr += newPrices[i] + ',';
        }
    }


    document.getElementById('result3').innerHTML=`prices: ${resultStr}`;

}


// 시계
/* function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime(date)
{
    return (`${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}`+
    `-${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`)
} */


/* window.onload=function()
{
    setInterval(function(){
        const now = new Date();
        const week =['일','월','화','수','목','금','토'];
        const hour1 =document.getElementById('hour1');
        const hour2 =document.getElementById('hour2');
        const min1 =document.getElementById('min1');
        const min2 =document.getElementById('min2');
        const sec1 =document.getElementById('sec1');
        const sec2 =document.getElementById('sec2');
        //
        const dateStr = myDatetime(now).substring(2,10);    //23-03-21
        const timeStr = myDatetime(now).substring(11);
        //
        const hourNow =now.getHours();
        const minNow =now.getMinutes();
        const secNow =now.getSeconds();
        //  hh = 일의자리 ex) 23시 -> 3 /h = 십의자리 ex 23-hh(23) -> 20 을 10으로 나눔 -> 2
        let hh=hourNow%10 ,h, mm=minNow%10 ,m, ss=secNow%10, s;                                           
        hourNow>10 ? h=((hourNow-hh)/10) : h=0;                         
        minNow>10 ? m=((minNow-mm)/10) : m=0;                         
        secNow>10 ? s=((secNow-ss)/10) : s=0;                         
        hour1.src=`../../00.numbers_img/${h}.svg`;
        hour2.src=`../../00.numbers_img/${hh}.svg`;
        min1.src=`../../00.numbers_img/${m}.svg`;
        min2.src=`../../00.numbers_img/${mm}.svg`;
        sec1.src=`../../00.numbers_img/${s}.svg`;
        sec2.src=`../../00.numbers_img/${ss}.svg`;
        
        //let week='일월화수목금토'.split('');
        //dateStr+='('+week[now.getDay()]+')';
        document.getElementById('date').innerHTML=`${dateStr}  (${week[now.getDay()]}) ` ;
        document.getElementById('time').innerHTML=timeStr;
        //
    },1000);
    
} */
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime(date)
{
    return (`${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}`+
    `-${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`)
}
window.onload(function(){
    setInterval(function(){
        const now = new Date();
        let week='일월화수목금토'.split('');
        const dateStr = myDatetime(now).substring(2,10); 
        dateStr+='('+week[now.getDay()]+')';
        const timeStr = myDatetime(now).substring(11,19)


        document.getElementById('h1').src=`../../00.numbers_img/${timeStr[0]}.svg`
        document.getElementById('h2').src=`../../00.numbers_img/${timeStr[0]}.svg`
        document.getElementById('m1').src=`../../00.numbers_img/${timeStr[0]}.svg`
        document.getElementById('m2').src=`../../00.numbers_img/${timeStr[0]}.svg`
        document.getElementById('s1').src=`../../00.numbers_img/${timeStr[0]}.svg`
        document.getElementById('s2').src=`../../00.numbers_img/${timeStr[0]}.svg`
        
    })
})