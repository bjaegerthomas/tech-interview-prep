//define function which accepts a string s: function validPalindrome(s)
function validPalindrome(s) {
    //split string into array: s = s.split("")
    s = s.split("");
    //define left window: let left = 0
    let left = 0;
    //define right window: let right = s.length
    let right = s.length;
    //define counter: let noMatch = 0
    let noMatch = 0;
    //loop through the string: while (left < right)
    while (left < right) {
        //check to see that characters on both ends of s are identical: if (s[left] !== s[right])
        if (s[left] !== s[right]) {
            //increment noMatch: noMatch++
            noMatch++;
            //edge case: check if there have been more than one non-matching characters: if (noMatch > 1) return false
            if (noMatch > 1) return false;
            //check to see if the next value matches: if (s[left] !== s[right-1])
            if (s[left] !== s[right-1]) {
                //remove the left character: s.splice(left, 1)
                s.splice(left, 1);
            //otherwise remove the right character: else s.splice(right, 1)
            } else {
                s.splice(right, 1);
            }
        }
        //increment left
        left++;
        //decrement right
        right--;
    }
    //if you make it out of the loop then there was only one non-matching character and you can return true: return true
    return true;
}