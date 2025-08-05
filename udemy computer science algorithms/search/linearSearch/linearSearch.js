function linearSearch(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return null;
        }
        else if (arr[i] === num) {
            return i;
        }
    }
    return -1
  }