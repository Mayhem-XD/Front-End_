// isPalindrome 함수 만들기
// C:\\Program Files\\nodejs\\node.exe. 에서 파일명만 출력

//isPalindrome

function isPalindrome(arr)
{
    let len = arr.length;
    for(let i=0;i<len-1;i++)
    {
        return arr[i] != arr[len-1-i] ? false : true;
    }
}
console.log(isPalindrome('기러기'));
console.log(isPalindrome('토마토'));
console.log(isPalindrome('기러기러기'));
console.log(isPalindrome('기러기아님'));

// C:\\Program Files\\nodejs\\node.exe. 에서 파일명만 출력

function findFilename(arr)
{
    const str = arr;
    return str.substring(24,28);
}

console.log(findFilename('C:\\Program Files\\nodejs\\node.exe.'));

//
function isPalindrome2(str)
{
    let reverStr ='';
    for(let i=str.length-1;i>=0;i--)
    {
        reverStr += str[i];
    }
    return str == reverStr;
}
console.log(isPalindrome2('토마토'));