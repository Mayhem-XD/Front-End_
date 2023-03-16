// 자료형 변환

console.log(123,String(123));
console.log(Number('101'),Number(true),Number(false)); //Not a Number

// 다음의 경우를 제외하면 모두 참(True)이 됨
console.log(Boolean(0),Boolean(0.0),Boolean(''),Boolean(NaN),Boolean(null),Boolean(undefined));
console.log(Boolean(' '),Boolean(3),Boolean({}));

//자동 변환
// boolean -> number -> string
console.log('bool '+true,'integer '+123,123+true);

// -,*,/ 인 경우에는 string -> number로 바뀜
console.log('52'-273,'8'*8,'4'/4);

// 두개의 값이 똑같나?
// 1) 변환된 값이 같으면 같다
console.log(54==54.0,52=='52');
console.log(true==1, false==0);

// 2) 변환된 값과 자료형이 일치해야 한다.
console.log(54===54.0,52==='52');
console.log(true===1, false===0);