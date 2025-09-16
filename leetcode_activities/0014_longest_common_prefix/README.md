# Longest Common Prefix

## Task Overview

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

## Approach
//define function which accepts an array of strings
    //instantiate variable currPre = ""
    //instantiate variable longPre = ""
    //instantiate var index = 0
    //loop through strs array as long as i < strs.length
        //if ((strs[i])[index] == (strs[i+1])[index])
            //then currPre = currPre.concat((strs[i])[i])
            //index++
        //if currPre/length >= longPre.length
            //then longPre = currPre
    //return longPre

## Given Solution

var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};

## Key Takeways

