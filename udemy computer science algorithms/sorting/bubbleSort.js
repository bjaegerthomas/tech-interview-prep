function bubbleSort (arr) {
    // function for readability to swap indexes
    function swap (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // first loop moves from the end of the array to the beginning because as we "bubble up" the largest value,
    // we will no longer need to used the last value to compare because we know with each pass that the largest value
    // is pushed to the end
    for (let i = arr.length - 1; i >= 0; i-- ) {
        // we compare the next two values side by side to see which is longer. and swap them if the left is greater than the right
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, i, j);
        }
    }
    return arr;
}
