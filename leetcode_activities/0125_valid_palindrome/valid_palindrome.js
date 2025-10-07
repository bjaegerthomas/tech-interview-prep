//define function which accetps a string
function validPalindrome (s) {
    //remove all non alphanumeric values and convert to lowercase: let cleanS = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()
    let cleanS = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
    //create right pointer: let right = cleanS.length - 1
    let right = cleanS.length - 1;
    //loop through string: for (let left = 0; left < right; left++)
    for (let left = 0; left < right; left++) {
        //check if pointers are equal: if (cleanS[left] != cleanS[right])
        //if not equal return false: return false
        if (cleanS[left] != cleanS[right]) return false;
        //decrement right by 1: right--
        right--;
    }
    //if loop completes and everything matches return true: return true
    return true;
}