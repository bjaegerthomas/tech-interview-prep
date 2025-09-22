# Search Insert Position

## Task Overview
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

## Approach
//write function which accepts an array of sorted, non-repeating integers and a target value function searchInsert(nums, target)
//create an index counter let index = 0
//loop through array while (target !== nums[index] && target !> nums[index] && nums[index])
    //index++
//return index

*NOTE* I know this first attempt is linear and not using O log n time complexity like it asks for but i needed to at least get it out of my head first

## Given Solution

## Key Takeways




