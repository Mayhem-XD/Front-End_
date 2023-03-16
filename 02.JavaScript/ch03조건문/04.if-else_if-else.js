//if-else if-else
let score =44;
let grade;
if(score>=90)
{
    grade='A';
}
else if (score>=80 && score<90)
{
    grade='B';
}
else if (score>=70 && score<80)
{
    grade='C';
}
else if (score>=60 && score<70)
{
    grade='D';
}
else
{
    grade='F';
}
console.log(`score: ${score}, 학점: ${grade}`);