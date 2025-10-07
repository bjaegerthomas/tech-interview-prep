# Valid Palindrome

## Task Overview

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

## Approach

Two Pointer:

//define function which accetps a string
    //remove all non alphanumeric values and convert to lowercase: let cleanS = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()
    //create right pointer: let right = s.length - 1
    //loop through string: for (let left = 0; left < right; left++)
        //check if pointers are equal: if (cleanS[left] != cleanS[right])
            //if not equal return false: return false
        //decrement right by 1: right--
    //if loop completes and everything matches return true: return true

## Given Solution

## Key Takeways

