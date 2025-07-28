function averagePair(arr, avg){
    let left = 0;
    let right = arr.length -1;
    let result = [];

    while (left < right) {
        let newAvg = (arr[left] + arr[right])/2;
        if (newAvg == avg) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        }
        else if (newAvg < avg) {
            left++
        }
        else {
            right--;
        }
    }
    return result;
}