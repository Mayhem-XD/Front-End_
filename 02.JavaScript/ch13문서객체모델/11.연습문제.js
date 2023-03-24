function ans1() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if (num1 < 0 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
        alert('입력값의 범위를 확인하고 다시 입력하세요.');
        return;
    }
    let powerArr = [];
    for (let i = num1; i <= num2; i++)
        powerArr.push(2 ** i);
    let resultStr = '';
    /* for (let power of powerArr)
        resultStr += power + '<br>'; */
    for (let i = 0; i < powerArr.length; i++) {
        if ((i + 1) % 4 == 0)
            resultStr += powerArr[i] + '<br>';
        else
            resultStr += powerArr[i] + ', ';
    }
    document.getElementById('result1').innerHTML = resultStr;
}

function ans2() {
    let text = document.getElementById('sentence').value;
    let search = document.getElementById('search').value.trim();    // 찾을 단어 주위의 공백을 없애 줌
    let noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ').toLowerCase();
    console.log(noPunct);
    let words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    document.getElementById('result2').innerHTML = `${search}의 갯수는 ${count} 입니다.`;
}

function ans3() {
    let priceStr = document.getElementById('price').value;
    let prices = priceStr.split(';');       // prices는 배열, element는 string
    // prices 의 각 요소를 정수로 변환
    let newPrices = [];
    for (let price of prices)
        newPrices.push(parseInt(price));
    // let newPrices = prices.map(function(x) {return parseInt(x)});
    // let newPrices = prices.map(x => parseInt(x));
    newPrices.sort(function(a, b) {
        return b - a;               // 내림차순 정렬
    });
    let resultStr = '';
    for (let element of newPrices)
        resultStr += element + '<br>';
    document.getElementById('result3').innerHTML = resultStr;
}

function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
window.onload = function() {
    setInterval(function() {
        const now = new Date();
        const week = '일월화수목금토'.split('');            // ['일','월', ..., '토']
        let dateStr = myDatetime(now).substring(2, 10);     // 23-03-23
        dateStr += '(' + week[now.getDay()] + ')';          // 23-03-23(목)
        const timeStr = myDatetime(now).substring(11, 19);  // 10:16:00
        document.getElementById('date').innerHTML = dateStr;
        
        document.getElementById('h1').src = `digits/${timeStr[0]}.svg`;
        document.getElementById('h2').src = `digits/${timeStr[1]}.svg`;
        document.getElementById('m1').src = `digits/${timeStr[3]}.svg`;
        document.getElementById('m2').src = `digits/${timeStr[4]}.svg`;
        document.getElementById('s1').src = `digits/${timeStr[6]}.svg`;
        document.getElementById('s2').src = `digits/${timeStr[7]}.svg`;
    }, 1000);
}