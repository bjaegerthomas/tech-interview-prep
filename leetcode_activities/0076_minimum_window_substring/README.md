# Minimum Window Substring

# Task Overview

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

# Approach

//define a function which accepts two strings: function minWinSub(s, t)
    //define length of s: let m = s.length
    //define length of t: let n = t.length
    //define current substring length: let currSubLen = 0
    //define maximum substring length: let maxSubLen = 0
    //define left window: let left = 0
    //define hash map for t string: let tMap = {}
    //loop through and fill in hash map for tMap: for (let char of t)
        // tMap[char] = (tMap[char] || 0) + 1
    //loop through s string: for (let right = 0; right < m; right ++)
        // if (tMap[right])

# Given Solution

# Thoughts