function minSubarrayLen (arr, sum) {
    if (arr.length == 0) {
        return null;
    }
    let newSum = 0;
    for (let minLen = 0; minLen < arr.length; minLEn++) {
        if (newSum >= sum) {
            return minLen;
        }
        else {
            newSum = newSum + arr[minLen];
            minLen++;
        }
    } 
    if (minLen >= arr.length) {
        return 0;
    }
    let newLen = minLen;
    for (let i = newLen; newLen < arr.length; i++) {
        newSum = newSum - arr[i - num] + arr[i];
        if (newSum >= sum) {
            if (i < newLen) {
                minLen = i;
            }
        }
    }
    return minLen;
}