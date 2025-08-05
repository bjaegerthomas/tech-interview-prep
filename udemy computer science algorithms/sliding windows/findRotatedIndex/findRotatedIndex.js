function sortedFrequency(arr, num) {
    let index = findFirst(arr, num);
    if (index === -1) return null;
    return index;
  }
   
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, high);
      } else {
        return findFirst(arr, num, low, mid - 1);
      }
    }
    else if (low > high) {
        return findFirst(arr, num, low +1, high);
    }
    return -1
  }