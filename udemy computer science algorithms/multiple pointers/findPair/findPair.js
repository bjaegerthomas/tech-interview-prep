function findPair(arr, n) {
    arr.sort();
    let left = 0;
    let right = arr.length - 1;
    let val = arr[right] - arr[left];

    while (left < right) {
        if (val == n) {
            return true;
        }
        else if (val > n) {
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}