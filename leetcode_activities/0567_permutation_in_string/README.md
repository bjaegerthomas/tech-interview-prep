# Permutation In String

# Task Overview

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.

# Approach

//define function which accepts two strings: function permInString(s1, s2)
    //define hash map for s1: let map = new Map()
    //define counter for characters to account for in s1: let chars = s1.length
    //loop through s1 and populate hash map: for (const letter of s1)
        // map.set(letter, (map.get(letter) || 0) + 1);
    //loop through s2 and compare values: for (let i = 0; i < s2.length; i++)
        //check if all letters have been found in s1 inside of s2: if (chars === 0) return true
        //define current character: const char = s2[i]
        //compare current character to hash map: if (map.has[char] && map.get[char] > 0)
            //decrement chars: chars--
        //map.set(char, (map.get(char) || 0) - 1);
    //if we don't find all of the letters in s1 inside s2 return false: return false

# Given Solution

# Thoughts
