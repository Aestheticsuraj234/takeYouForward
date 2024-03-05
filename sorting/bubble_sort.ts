const bubbleSort=(arr:number[],n:number)=>
{
    for(let i =n-1;i>=1;i--)
    {
        let didSwap = false
        for(let j=0;j<=i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                didSwap = true;
               
            }
            if(!didSwap)
            {
                break;
            }
        }

    }
    return arr

}

function main() {
    let arr:number[] = [5, 2, 6, 1, 3, 4];
    let n = arr.length;
    let sortedArray = bubbleSort(arr, n);
    console.log(sortedArray); // Output the sorted array
}

main();
