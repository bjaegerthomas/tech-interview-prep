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

After checkin in with ChatGPT i got this fix to my current issue where I am decrementing too much and ahead of my condition check:

while (str2.length > 0) {
    if (str1.includes(str2)) return str2;
    str2 = str2.slice(0, -1);   // remove last char
}

return "";

Actual GIVEN SOLUTION:

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (len1, len2) => {
        while (len2 !== 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));    
};

Broken down further for easier reading:

var gcdOfStrings = function(str1, str2) {
    // First check: if the strings cannot be formed by repeating the same pattern
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Compute the GCD of the lengths manually (Euclidean algorithm)
    let len1 = str1.length;
    let len2 = str2.length;

    while (len2 !== 0) {
        let temp = len2;       // hold current len2
        len2 = len1 % len2;    // remainder
        len1 = temp;           // shift values
    }

    // len1 now holds the greatest common divisor of the lengths
    let gcdLength = len1;

    // The GCD string is the first gcdLength characters of either string
    return str1.slice(0, gcdLength);
};

# Thoughts
I get the original conditional of the str1 + str2 !== str2 + str1 check and now without the helper function I'm able to better understand the process of how it determines the inner logic of str lengths and divisors.