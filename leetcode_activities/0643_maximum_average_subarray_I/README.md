# Maximum Average Subarray I

## Task Overview

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

# Approach

//define a function which accepts an array of integers "nums" and a second integer k:
//function maxAvgSub(nums, k)
    //define left window: let left = 0
    //define right window: let right = 0
    //define maximum average subarray: let maxSub = 0
    //define total: let total = 0
    //loop through nums to find current avg subarray:
    //while (right < left + k && left + k > nums.length)
        //determine the current total: total += nums[right]
        //increment right: right++
    
    Ok, i've been working on this one for 45 minutes and i have restarted 4 times now.
    I'm going to look at a solution.

# Given Solution

var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};

# Thoughts
This makes sense. You are essentially getting the very first sum, and then from there you are getting the next sum, sliding the window forward, subtracting the value from the beginning of the window and adding the new value at the end of the window. Then determing the largest sum and finally dividing that by the entered value k.