function areThereDuplicates(...arr) {
    let i = 0;
    const sorted = arr.sort();

    for (var j = 1; j < sorted.length; j ++) {
        if (sorted[i] == sorted[j]) {
            return true;
        }
        else {
            sorted[i] = sorted[j];
        }
        if (j === arr.length - 1) {
            return false;
        }
    }
}
  
console.log(areThereDuplicates(7, 8, 9, 10, 8, 9, 11));
  