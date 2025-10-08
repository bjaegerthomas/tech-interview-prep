# Majority Element

## Task Overview
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## Goals
Create a function which handles finding the majority element within an array

## Approach
Iterate over an array after turning it into an object to create a frequency counter then use the number of times each number appears in a string to identify the cooresponding key, which is then returned as the element which shows up the most.

## Key Takeways
I don't need to create a separate object and two loops. I can just take the current key and create a counter while comparing it to the other values within one loop.

## Similar AI Problem
Given an array nums of size n, return the element that appears the most frequently (the plurality element). If there is a tie, return any one of the most frequent elements.

Note: Unlike the original problem, the element does not need to appear more than n/2 times — just more than any other element.

## Self Reflection
The idea of keeping a counter going while also looping through as opposed to a separate loop for comparison of elements and counting is valuable.
Taking more time to think through the logic before starting in on the code reduces the overall time to complete the solution.
I need to resolidify some of the terminology when it comes to keys, values, elements, indexes and the like to help streamline my approaches and knowing the best plan of attack for a given problem.

2nd try:

# Majority Element (Take 2)

## Task Overview (Take 2)

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

## Approach (Take 2)

//define function which accepts an array of integers nums - function majorityElement(nums)
    //define hashmap - let numsMap = new Map ()
    //define counter to keep track of element with largest number of occurences - let counter = 0
    //define majority to be the lement with the most occurences - let majority = 0
    //loop through array and build numsMap - for (let num in nums)
        //check if key exists, if it doesn't exist, create it and establish its value as 0 and add 1 or simply add 1 to the key as it already exists - numsMap.set(num, (numsMap.get(num) ?? 0) + 1)
        //check if current key's value is greater than counter - if (numsMap.get(num) > counter)
            //if it is greater set the counter to the cureent highest number of occurences - counter = numsMap.get(num)
            //and also update majority to the current num - majority = num
    //return majority
    


## Given Solution (Take 2)

## Key Takeways (Take 2)

