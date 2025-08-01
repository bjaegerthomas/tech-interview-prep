function minSubarrayLen (arr, sum) {
    if (arr.length == 0) {
        return null;
    }
    let newSum = 0;
    let minLen = 0;
    for (let i = minLen; i < arr.length; i++) {
        if (newSum >= sum) {
            return minLen;
        }
        else {
            newSum = newSum + arr[i];
        }
        minLen = i;
    } 
    if (minLen >= arr.length) {
        return 0;
    }
    let newLen = minLen;
    for (let i = newLen; i < arr.length; i++) {
        newSum = newSum - arr[i - newLen] + arr[i];
        if (newSum >= sum) {
            if (i < minLen) {
                newLen = i;
            }
        }
    }
    return minLen;
}