function naiveSearch(long, short){
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        let j = i;
        while (short[j] === long[j]) {
            if (j === short.length - 1) count++;
            else j++;
        }
   }
   return count;
}