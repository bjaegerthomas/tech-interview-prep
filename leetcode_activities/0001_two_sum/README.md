# Two Sum

## Task Overview
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

## Approach
We need to create a function sum which accepts an array of integers "nums" and a target value "target" which will be the sum of two of those integers.
We then need to create a for loop with an i counter which will indicate the indicies of our first integer.
Nested inside that for loop will be a second for loop with a k counter which will indicate the indicies of our second integer. We then create an if statement to check wether the sum of nums[i] + nums[k] is = to target. We continue through the loop until we find the two integers and then return their indicies.

## Given Solution

## Key Takeways
My solution works but it would be good to think about a refactoring that could acheive something better than a O(n2) time complexity with the nested for loops.
