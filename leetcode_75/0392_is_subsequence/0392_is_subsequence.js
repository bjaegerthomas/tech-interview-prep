//define function which accepts two strings, s and t: function isSubsequence (s,t)
function isSubsequence (s,t) {
    //define left pointer: let left = 0
    let left = 0;
    //define right pointer and loop through array: for (let right = 0; right < t.length; right++)
    for (let right = 0; right < t.length; right++) {
        //check if current value in s is equal to the current value in t: if (s[left] == t[right])
            //if they are equal increment left: left++
        if (s[left] == t[right]) left++;
    }
    //check to see if the left pointer made it all the way through the string: if (left == s.length - 1)
        //if it's true return true: return true
    if (left == s.length) return true;
    //otherwise return false: return false
    return false;
}