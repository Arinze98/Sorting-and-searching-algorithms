function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert current at the correct position in sorted part
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
let arr = [5, 2, 4, 6, 1, 3];
console.log("Original Array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted Array:", sortedArr);
