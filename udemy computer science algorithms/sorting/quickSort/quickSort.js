function pivot(arr, comparator, start=0, end=arr.length -1) {
    let pivot = start;
    for (comparator; comparator < end; comparator++){
        if (arr[start] > arr[comparator]){
            pivot++;
        }
    }
    arr[start] = arr[pivot];
  }
  
  function quickSort(arr, comparator) {
    // good luck!
  }