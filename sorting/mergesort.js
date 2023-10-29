let arr = [2,1,4,5,3,7];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2); // Corrected typo
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
    let left = mergeSort(arr1);
    let right = mergeSort(arr2);
    return merge(left, right);
}

function merge(leftArray, rightArray) {
    console.log('inside merge..');
    let result = [];
    let left = 0;
    let right = 0;
    while (left < leftArray.length && right < rightArray.length) {
        if (leftArray[left] < rightArray[right]) {
            result.push(leftArray[left++]); // Corrected variable name
        } else {
            result.push(rightArray[right++]); // Corrected variable name
        }
    }
    console.log('arr', result);
    return result.concat(leftArray.slice(left), rightArray.slice(right));
}

// Example usage:
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 7]
