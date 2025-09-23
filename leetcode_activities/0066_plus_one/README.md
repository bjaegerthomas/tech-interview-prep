# Plus One

## Task Overview

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

## Approach
//create function which takes in an array of integers function plusOne(digits)
    //for (let i = digits.length - 1; i >= 0; i--)
        //if (digits[i] != 9)
            //digits[i] = digits[i] + 1;
            //return digits
        //else digits[i] = 0
    //return digits

*UPDATED* After tweaking for the event you have the last digit (aka the first i'th digit) as a 9 or all of the digits as a 9 for that matter, here is the updated code approach below

//create function which takes in an array of integers function plusOne(digits)
    //for (let i = digits.length - 1; i >= 0; i--)
        //if (digits[i] != 9)
            //digits[i] = digits[i] + 1;
            //return digits
        //digits[i] = 0
    //digits.unshift(1) if all digits are a 9 we need to add an additional i'th place at the beginning of the array
    //return digits

## Given Solution

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};

## Key Takeways
After consulting with gpt to tweak my original solution and solving for the event there are only 9's in the original array I realized you don't need to do the conditional check at the bootom to see if i = 0 before unshifting(1). You can merely assume that if the loop wasn't exited early, then the only digit(s) in the original array is a/are 9/'s.




