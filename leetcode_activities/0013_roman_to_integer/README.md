# Roman to Integer

## Task Overview
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## Approach

In an interview setting it may be of value to ask if "It is guaranteed that s is a valid roman numeral in the range [1, 3999]." means that we can assume the string will be in all capital letters or if we would need an edge case to convert them?

// create a function which accepts a string "s" and converts it from a roman numeral into an integer
    // initialize a var num = []
    // initialize a var current = 0
    // move through a for loop as long as i < s.length - 1
        // check if s[i] in string  === C
            // check to see if the next element s[i+1] === D
                // set current = 4
                // increment i by 1 since we can skip the next variable as we know it is a D
            // else if the next element === M
                // set current = 9
                // increment i by 1 since we can skip the next variable as we know it is a M
            // else set current = 1
        // check if s[i] === X
            // check if the next element s[i+1] === L
                // set current = 4
                // increment i by 1 since we can skip the next variable as we know it is a L
            // else if s[i+1] === C
                // set current = 9
                // increment i by 1 since we can skip the next variable as we know it is a C
            // else set current = 1
        // check if s[i] === I
            // check if the next element s[i+1] === V
                // set current = 4
                // increment i by 1 since we can skip the next variable as we know it is a V
            // else check if s[i+1] === X
                // set current = 9
                // increment i by 1 since we can skip the next variable as we know it is a X
            // else set current = 1
        // check if s[i] === V
            // set current = 5
        // check if s[i] === L
            // set current = 5
        // check if s[i] === D
            // set current = 5
        // check if s[i] === M
            // set current = 1
        // num.push(current)
    // return num
    
## Given Solution

## Key Takeways
