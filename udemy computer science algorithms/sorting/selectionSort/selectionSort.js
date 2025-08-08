function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let small = i;
        for (let j = i + 1; j < arr. length; j++){
            if (arr[j] < arr[small]) {
                temp = j;
            }
        }
        if (small !== i) {
            let temp = arr[i];
            arr[i] = arr[small];
            arr[small] = temp;
        }
    }
    return arr;
}