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
    //define different pointers for two pointer approach, left pointer: let left = 0
    //define right pointer: let right = 0
    //define temporary value for switching: let temp = 0
    //loop through all values in array as long as the right pointer doesn't exceed the total array values: while (right < nums.length)
        //check if the current value is equal to 0: if (nums[right] !== 0)
            //if the current value is not a 0 then we need to swap the right and left values, temporarily store left value: temp = nums[left]
            //swap left with right value: nums[left] = nums[right]
            //replace right value with former left value: nums[right] = temp
            //increment the left pointer: left++
        //increment the right pointer: right++
    //return the arrray: return nums

# Given Solution

# Thoughts


