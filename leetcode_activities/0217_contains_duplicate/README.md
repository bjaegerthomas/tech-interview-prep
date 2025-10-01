# Contains Duplicate

## Task Overview

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

## Approach

Brute force:

//define function which accepts an array nums - function containsDuplicate(nums)
    //loop through array - for (let i = 0; i < nums.length; i++)
        //loop through array again - for (let j = i+1; j < nums.length; j++)
        //check to see if element at first index is equal to element at second index - if (nums[i] == nums[j])
            //if they are equal return true - return true
    //if you make it through the loop with exiting as true, return false - return false

Hash map:

//define function which accepts an array nums - function containsDuplicate()
    //define counter for a hashmap to keep track of the values of the keys - let counter = new Map()
    //loop through nums to establish the hashmap - for (let num in nums)
        //check if num exists in counter if it doesn't, establish it and add 1 to the key's value, if it does add one to the key's value - counter.set(num, (counter.get(num) ?? 0) + 1)
        //check if counter's current key has a value greater than 1, if it does, return true - if (counter.get(num) > 1) return true
    //if you make it through the loop without finding any duplicate numbers return false - return false
    

## Given Solution

## Key Takeways

