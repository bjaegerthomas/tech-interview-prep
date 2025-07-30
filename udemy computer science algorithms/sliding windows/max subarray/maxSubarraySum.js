function maxSubarraySum(arr, num){
    let maxSum = 0;
    let newSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum = maxSum + arr[i];
    }
    newSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        newSum = newSum - arr[i - num] + arr[i];
        if (newSum > maxSum) {
            maxSum = newSum;
        }
    }
    return maxSum;
  }