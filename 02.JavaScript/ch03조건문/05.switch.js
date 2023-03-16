// switch - multiple select

let score=44;
let grade='F';
let scoreDigit=parseInt(score/10); //10으로 나눈 몫, 정수값
switch(scoreDigit)
{
    case 10:
    case 9:
        grade='A';
        break;
    case 8:
        grade='B';
        break;
    case 7:
        grade='C';
        break;
    case 6:
        grade='D';
        break;
    /* default:
        grade='F';
        break; */
}
console.log(`성적 ${score} 학점: ${grade}` )