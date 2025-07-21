function countUniqueValues(arr){
    let count = 0;
    let point1 = 0;
    let point2 = 1;

    while (point2 < arr.length) {
        if (arr[point1] == arr[point2]) {
            point2 += 1;
        }
        else {
            count += 1;
            point1 += 1;
            point2 += 1;
        }
    }
    return count;
  }