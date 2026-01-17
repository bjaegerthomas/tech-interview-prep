# Is Subsequence

## Task Overview
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

# Approach
//define function which accepts two strings, s and t: function isSubsequence (s,t)
    //define left pointer: let left = 0
    //define right pointer and loop through array: for (let right = 0; right < t.length; right++)
        //check if current value in s is equal to the current value in t: if (s[left] == t[right])
            //if they are equal increment left: left++
    //check to see if the left pointer made it all the way through the string: if (left == s.length - 1)
        //if it's true return true: return true
    //otherwise return false: return false

# Given Solution

# Thoughts



