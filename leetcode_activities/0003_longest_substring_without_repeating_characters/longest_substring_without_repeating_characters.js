//define function which accepts a string s: function nonRepeatSubstring(s)
function nonRepeatSubstring(s) {
    //define left window: let left = 0
    let left = 0;
    //define maximum string length: let maxSub = 0
    let maxSub = 0;
    //define current substring: let currSub = ""
    let currSub = "";
    //loop through string: for (let right = 0; right < s.length; right++)
    for (let right = 0; right < s.length; right++) {
        //update currSub: currSub += s[right]
        currSub += s[right];
        //convert currSub to a set: let currSubSet = new Set (currSub)
        let currSubSet = new Set (currSub);
        //check to see if size and length are equal: if (currSubSet.size !== currSub.length)
        if (currSubSet.size !== currSub.length) {
            //move left window to the right: left = right
            left = right;
            //reset the current substring: currSub = ""
            currSub = "";
        }
        //update the maximum substring length: if (currSub.length > maxSub) maxSub = currSub.length
        if (currSub.length > maxSub) maxSub = currSub.length;
    }
    //return the maximum substing length: return maxSub
    return maxSub;
}