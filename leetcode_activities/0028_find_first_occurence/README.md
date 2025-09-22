# Find First Occurence in a String

## Task Overview
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

## Approach
//define function which accepts two strings needle and haystack function findFirstOccur(haystack, needle)
    //determine length of needle and set in variable let needleLen = needle.length - 1
    //set counter let count = 0
    //loop through haystack while (needle !== haystack.substring(count, needleLen))
        //count++
    //if (count = haystack.length) count = -1
    //return count

## Given Solution

## Key Takeways



