# Valid Anagram

## Task Overview

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

## Approach
//define function that accepts two strings function validAnagram(s, t)
//sort s let sortedS = s.plit("").sort().join("")
//sort t let sortedT = t.plit("").sort().join("")
//compare the two sorted strings and return the result return sortedS === sortedT

## Given Solution

## Key Takeways

