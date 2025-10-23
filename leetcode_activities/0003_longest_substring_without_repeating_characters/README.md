# Longest Substring Without Repeating Characters

# Task Overview

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

## Approach

//define function which accepts a string s: function nonRepeatSubstring(s)
    //define left window: let left = 0
    //define maximum string length: let maxSub = 0
    //define current substring: let currSub = ""
    //loop through string: for (let right = 0; right < s.length; right++)
        //update currSub: currSub += s[right]
        //convert currSub to a set: let currSubSet = new Set (currSub)
        //check to see if size and length are equal: if (currSubSet.size !== currSub.length)
            //move left window to the right: left = right
            //reset the current substring: currSub = ""
        //update the maximum substring length: maxSub++
    //return the maximum substing length: return maxSub

## Given Solution

function nonRepeatSubstring(s) {
  let left = 0;
  let maxSub = 0;
  let seen = new Set();

  for (let right = 0; right < s.length; right++) {
    // if we hit a duplicate, move the left pointer
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    // add current character
    seen.add(s[right]);
    // update max length
    maxSub = Math.max(maxSub, right - left + 1);
  }

  return maxSub;
}


## Thoughts

I wasn't taking into account the possibility of the next character within my currSub being the starting point for a new sub string by making my left pointer auto update to my right. By using the has, delete, and add helper methods as well as Math.max I can still use my logic but do so correctly and more elegantly.


