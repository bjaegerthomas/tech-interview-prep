function productOfArray(arr) {
    if (arr.length === 0) return 0; //Was thinking this was an edge case for if someone entered an empty array from the start, but it actually needs to be my edge case
    for (let i = 1; i < arr.length; i++) {
        return arr[0] * productOfArray(arr[i]);
    }
}