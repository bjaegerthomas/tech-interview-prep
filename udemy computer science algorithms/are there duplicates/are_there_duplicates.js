function areThereDuplicates(arr) {
    let i = 0;
    
    for (var j = 1; j < arr.length; j ++) {
        if (arr[i] == arr[j]) {
            return true;
        }
        else {
            arr[i] = arr[j];
        }
    }
    return false;
  }
  
  console.log(areThereDuplicates(7, 8, 9, 10, 8, 9, 11));