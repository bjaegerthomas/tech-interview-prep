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

## Approach

//define function which accepts an array nums - function moveZeroes (nums)
    //define left side of window - let left = 0
    //define right side of window - let right = 0
    //define temporary value holder - let temp = 0
    //loop through array - while (right > nums.length)
        //check if current value is a zero - if (nums[right] !== 0)
            //if value is not equal to 0 we need to switch the values of the left and 
            //right indexes of nums - nums[left] = temp
            //nums[left] = nums[right]
            //nums[right] = temp
            //increase the left index - left++
        //increase the right index - right++
    //return the array - return nums

## Given Solution

var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};

## Key Takeways

