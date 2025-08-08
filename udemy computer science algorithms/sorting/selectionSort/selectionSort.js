function selectionSort(arr) {
    let small = 0;
    let comp = 1;
    function swap(arr, small, comp) {
        if (arr[comp] < arr[small]) {
            let temp = comp;
            comp = small;
            small = temp;
        }
    }
    return arr;
}