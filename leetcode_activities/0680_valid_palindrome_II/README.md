# Valid Palindrome II

## Task Overview

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

# Approach

//define function which accepts a string s: function validPalindrome(s)
    //split string into array: s = s.split("")
    //define left window: let left = 0
    //define right window: let right = s.length
    //define counter: let noMatch = 0
    //loop through the string: while (left < right)
        //check to see that characters on both ends of s are identical: if (s[left] !== s[right])
            //increment noMatch: noMatch++
            //check if there have been more than one non-matching characters: if (noMatch > 1) return false
            //check to see if the next value matches: if (s[left] !== s[right-1])
                //remove the left character: s.splice(left, 1)
            //otherwise remove the right character: else s.splice(right, 1)
        //increment left
        //decrement right
    //if you make it out of the loop then there was only one non-matching character and you can return true: return true 

# Given Solution

# Thoughts