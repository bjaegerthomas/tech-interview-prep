//define function which accepts two strings needle and haystack function findFirstOccur(haystack, needle)
function findFirstOccur(haystack, needle) {
    //determine length of needle and set in variable let needleLen = needle.length - 1
    let needleLen = needle.length - 1;
    //set counter let count = 0
    let count = 0;
    //loop through haystack while (needle !== haystack.substring(count, needleLen))
        //count++
    while (needle !== haystack.substring(count, needleLen)) count++;
        
    //if (count = haystack.length) count = -1
    if (count = haystack.length) count = -1;
    //return count
    return count;
}