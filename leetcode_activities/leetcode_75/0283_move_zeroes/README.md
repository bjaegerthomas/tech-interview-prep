# Move Zeroes

## Task Overview

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


# Approach

//define function which accepts an array of integers nums: function moveZeroes (nums)
    //define counter idx: let idx = 1
    //loop through nums array: for (let i = 0; i < nums.length; i++)
        //check if current num is a zero: if (nums[i] === 0)
            //if current num is a 0 switch places with the next value in array: nums[i] = nums [i+1]
            //then we also need to make the next value in the array a zero: nums[i+1] = 0

# Given Solution

# Thoughts


