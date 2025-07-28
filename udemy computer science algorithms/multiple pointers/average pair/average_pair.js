function averagePair(arr, avg){
    let left = 0;
    let right = arr.length -1;
    let result = [];

    while (left < right) {
        let newAvg = (arr[left] + arr[right])/2;
        if (newAvg == avg) {
            result.push([arr[right], arr[left]]);
            left++;
            right--;
        }
        if (newAvg < avg) {
            left++
        }
        else if (newAvg > avg) {
            right--;
        }
    }
    return result;
}