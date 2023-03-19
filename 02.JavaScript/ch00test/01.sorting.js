//  insertionSort
let arr=[13,21,2,31,22,9,45,73,25,10,74,79,29];

insertionSort(arr);
console.log(`${arr}`);



function insertionSort(arr) 
{
    let len = arr.length;
    
    for (let i = 1; i < len; i++)
    {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) 
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    
    return arr;
}

function bubbleSort(arr)
{
    len = arr.length-1;
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
}