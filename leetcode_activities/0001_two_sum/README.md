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

*This is the brute force way*

We need to create a function sum which accepts an array of integers "nums" and a target value "target" which will be the sum of two of those integers.
We then need to create a for loop with an i counter which will indicate the indicies of our first integer.
Nested inside that for loop will be a second for loop with a k counter which will indicate the indicies of our second integer. We then create an if statement to check wether the sum of nums[i] + nums[k] is = to target. We continue through the loop until we find the two integers and then return their indicies.

*This is an attempt at a refactored approach*

If we create an object using map we can then check to see if the complimentary element exists as a key value and map it cooresponding indexes to it

//function twoSum (nums, target) define function which accepts an array of integers and a target value which will be the sum of two elements within the array
    //let numsObj = new Map() create object to search for the complimenatry value as a key and map it's cooresponding indexes to it
    //for (let i = 0, i < nums.length; i++) loop through elements in nums
        //let compliment = target - nums[i] let the complimentary element be equal to the target value - the current element
        //if (numsObj.has(compliment) && compliment != nums[i]) check to see if the new object has the complimentary element and it's not equal to the current element in the original array
            //return numsObj.get(compliment), i return the compliment's key value pair (it's indexes) and the current element's counter
        //numsObj.set(compliment, i) if the compliment doesn't already exist, then set it in the new obj as the key and make it's value pair = to i
        



## Given Solution

## Key Takeways
My solution works but it would be good to think about a refactoring that could acheive something better than a O(n2) time complexity with the nested for loops.
