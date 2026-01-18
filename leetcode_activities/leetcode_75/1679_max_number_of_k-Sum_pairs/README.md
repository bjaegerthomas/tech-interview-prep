# Max Number of K-Sum Pairs

## Task Overview
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
1 <= k <= 10^9

# Approach
//define a function which accepts an array nums and an integer k: function maxOperations (nums, k)
    //define left pointer: let lp = 0
    //define right pointer: let rp = nums.length - 1
    //define operations counter: maxOp = 0
    //loop through array: while (lp < rp || nums.length !== 0)
        //check if current values add up to k: if (nums[lp] + nums[rp] == k)
            //if true increase operations counter: maxOp++
            //remove value at index lp from array: nums.slice(lp,1)
            //remove value at index rp from array: nums.slice(rp,1)
            //reset rp value: rp = nums.length - 1
        //if it doesn't add up decrement rp and check again: else rp--
    //return the maximum number o operations: return maxOp

# Given Solution

# Thoughts
