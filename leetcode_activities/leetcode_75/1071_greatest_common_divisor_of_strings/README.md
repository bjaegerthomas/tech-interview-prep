# Greatest Common Divisor of Strings

## Task Overview

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

# Approach

//define a function which accepts two strings str1 and str2
    //define variable index as our counter: let index = str2.length - 1
    //loop through str2 to determine the divisor and see if it is a substring of str1: while (index > -1)
        //see if str1 includes str2: if (str1.includes(str2))
            //if true, return str2: return str2
        //if not true: else
            //decrement index counter: index--
            //update str2 removing the last value at index: str2 = str2.slice(0, index)
    //return the divisor which is str2: return str2
        
# Given Solution

# Thoughts
