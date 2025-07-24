function productOfArray(arr) {
    if (arr.length === 0) return 0;
    for (i = 1; i < arr.length; i++) {
        return arr[0] * productOfArray(arr-i);
    }
}