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
  };
  
  const arr = [-3, -2, 1, 1, 5, 6, 7, 7, 8];
  console.log(countUniqueValues(arr));