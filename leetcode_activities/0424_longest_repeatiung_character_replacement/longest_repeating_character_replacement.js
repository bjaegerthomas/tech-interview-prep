//define function which accepts a string s and a value k: function longestRepCharRep(s, k)
function longestRepCharRep(s, k) {
    //define space counter: let count = k
    let count = k;
    //define left window: let left = 0
    let left = 0;
    //define longest value: let long = 0
    let long = 0;
    //define current longest: let currLong = 0
    let currLong = 0
    //loop through string to find repeat char: for (let right = 1; right < s.length; right++)
    for (let right = 1; right < s.length; right++) {
        //check if adjacent values are the same: if (s[left] !== s[right])
            //if not, decrement count: count--
        if (s[left] !== s[right]) count--
        //check if count is = -1: if (count === -1)
        if (count === -1) {
            //if true update current: currLong = right - left + 1
            currLong = right - left + 1;
            //increment left: left++
            left++;
            //reset end of window: right = left + 1
            right = left + 1;
            //reset the count: count = k
            count = k;
        }
        //check if current sub string is the longest: if (currLong > long)
            //if so replace longest: long = currLong
        if (currLong > long) long = currLong;
    }
    //return the longest substring: return long
    return long;
}