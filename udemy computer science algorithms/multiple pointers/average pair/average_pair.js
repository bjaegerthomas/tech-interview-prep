function averagePair(arr, avg){
    let left = 0;
    let right = arr.length -1;
    let result = [];

    while (arr[left] < arr[right]) {
        let newAvg = (arr[left] + arr[right])/2;
        if (newAvg == avg) {
            result.push(arr[right], arr[left]);
            right--;
        }
        if (newAvg < avg) {
            left++
        }
        right--;
    }
    return result;
  }