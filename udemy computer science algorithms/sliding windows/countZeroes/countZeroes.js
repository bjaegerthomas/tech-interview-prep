function countZeroes (arr) {
    let start = 0;
    let end = arr.length - 1;
    let total = 0;
    let values = new Set(arr);
    // if the array is empty we return a null value
    if (arr.length === 0) {
        return null;
    }
    // if the array only has zeroes then we return the length of the array as the number of zeroes
    if (!values.has(1)) {
        return arr.length;
    }
    // if the array has no zeroes then we return zero as the value because none exist
    if (!values.has(0)) {
        return 0;
    }
    while (start < end) {
        let middle = Math.floor((end + start)/2);
        let current = arr[middle];
        let previous = arr[middle-1];
        // if the current number is 0 and the one to the left of it is 1, then we have founbd the beginning edge of
        // our all zero substring
        if (current === 0 && previous === 1) {
            total = arr.length - middle;
            break;
        }
        // if the current element is 1 then let's bump up the left side of our window by one
        else if (current === 1) {
            start++;
        }
        // if the current element is 0 but doesn't have a 1 to the left then we reduce the right side of our window by one
        else if (current === 0) {
            end--;
        }
    }
    return total;
}