function averagePair(arr, avg){
    let left = 0;
    let right = arr.length -1;
    let result = [];

    while (left < right) {
        let newAvg = (left + right)/2;
        if (newAvg == avg) {
            result.push([right, left]);
            right--;
        }
        if (newAvg < avg) {
            left++
        }
        right--;
    }
    return result;
  }