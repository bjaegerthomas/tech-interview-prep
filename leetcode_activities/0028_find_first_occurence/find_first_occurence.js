//define function which accepts two strings needle and haystack function findFirstOccur(haystack, needle)
function findFirstOccur(haystack, needle) {
    //determine length of needle and set in variable let needleLen = needle.length - 1
    let needleLen = needle.length;
    //set counter let count = 0
    let count = 0;
    //loop through haystack while (needle !== haystack.substring(count, needleLen))
        //count++
    while (count <= haystack.length - needleLen) {
        if (haystack.substring(count, count + needleLen) === needle) {
            return count;
        }
        count++;
    }
        
    //if we exit the loop without a return then return -1 because we didn't find the substring
    return -1;
}