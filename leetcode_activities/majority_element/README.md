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