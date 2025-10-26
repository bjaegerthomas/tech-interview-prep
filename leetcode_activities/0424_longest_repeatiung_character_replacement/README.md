# Longest Repeating Character Replacement

## Task Overview

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

# Approach

//define function which accepts a string s and a value k: function longestRepCharRep(s, k)
    //define space counter: let count = k
    //define left window: let left = 0
    //define longest value: let long = 0
    //define current longest: let currLong = 0
    //loop through string to find repeat char: for (let right = 1; right < s.length; right++)
        //check if adjacent values are the same: if (s[left] !== s[right])
            //if not, decrement count: count--
        //check if count is = -1: if (count === -1)
            //if true update current: currLong = right - left + 1
            //increment left: left++
            //reset end of window: right = left + 1
            //reset the count: count = k
        //check if current sub string is the longest: if (currLong > long)
            //if so replace longest: long = currLong
    //return the longest substring: return long
        
# Given Solution

var characterReplacement = function(s, k) {
    let ans = 0;
    let n = s.length;
    for (let c = 65; c <= 90; c++) { // ASCII values for 'A' to 'Z'
        let i = 0, j = 0, replaced = 0;
        while (j < n) {
            if (s[j] === String.fromCharCode(c)) {
                j++;
            } else if (replaced < k) {
                j++;
                replaced++;
            } else if (s[i] === String.fromCharCode(c)) {
                i++;
            } else {
                i++;
                replaced--;
            }
            ans = Math.max(ans, j - i);
        }
    }
    return ans;
};

# Thoughts

I think this approximates most closely what i was trying to fo without using a hash table. I didn't think to use ascii values.
