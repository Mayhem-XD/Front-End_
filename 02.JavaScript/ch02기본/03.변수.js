let pi=3.14159265;
let radius =10;
console.log('둘레: ',2*pi*radius);
console.log(`면적: ${pi*radius**2}`);
// 복합 대입 연산자
/* let a=1,n=0;
{
    a+=2;
    console.log(a);
}
console.log(a);
{
    for(a;a<=10;a++){n+=a;}
    console.log(n);
}

console.log('n '+n);
console.log('a '+a);

{
    function factorial(n)
        {
            if (n == 1) {return 1} 
            else {return n * factorial(n - 1)}
        }   
    console.log(factorial(5));
} */


/* let str ='';
str += 'A quick brown fox';
str += ' '+'jumps over the lazy dog'
console.log(str); */

//증감 연산자
/* let x=0,y=0;
console.log(++x);
console.log(y++);
 */
// 4.함수
console.log(typeof function(){});
console.log(typeof(()=>{}));


// 5. 객체(object)
let obj = {x:1,y:2};
console.log(typeof obj);
console.log(obj.x,obj.y);

// 6. undefined
let alpha;
console.log(typeof alpha,typeof beta);