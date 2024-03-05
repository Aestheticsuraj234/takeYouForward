const swap = (arr:number[], i:number, j:number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr:number[], n:number) {
    for(let i = 0; i < n - 1; i++) {
        let mini = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[mini]) {
                mini = j;
            }
        }
        swap(arr, i, mini);
    }
    return arr;
}

function main() {
    let arr:number[] = [5, 2, 6, 1, 3, 4];
    let n = arr.length;
    let sortedArray = selectionSort(arr, n);
    console.log(sortedArray); // Output the sorted array
}

main();
