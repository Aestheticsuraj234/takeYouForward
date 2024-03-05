const insertionSort = (arr: number[], n: number) => {
    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
};

function main() {
    let arr: number[] = [5, 2, 6, 1, 3, 4];
    let n = arr.length;
    let sortedArray = insertionSort(arr, n);
    console.log(sortedArray); // Output the sorted array
}

main();
