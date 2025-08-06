function binarySearch(arr, num){
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((right - left)/2)
        if (arr[mid] === num) return mid;
        else if (arr[mid] < num) left++;
        else right--;
    }
    return -1;
  }