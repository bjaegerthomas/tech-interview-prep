function minSubarrayLen (arr, num) {
    if (arr == []) {
        return null;
    }
    let newSum = 0;
    let minLen = 0;
    while (newSum < sum) {
        newSum = newSum + arr[minLen];
        if (minLen > arr.length) {
            return 0;
        }
        minLen++;
    }
    let newLen = minLen;
    for (let i = newLen; newLen > arr.length; i++) {
        newSum = newSum - arr[i - num] + arr[i];
        if (newSum >= sum) {
            if (i < newLen) {
                minLen = i;
            }
        }
    }
    return minLen;
}