# Find Pair

## Task Overview
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

## Possible Logic
First we need to sort the array. Next we need to initialize two pointers which will be placed at the beginning of the array and end of the array respectfully. Next create a while loop with a condition which checks if the beginning pointer is less than the end pointer. Inside the loop we need a condition which checks if the array value at end index minus the array value at begin index is equal to n, if so we return true. Then we need to check and see if the same condition is greater than n in which case we decrement the left pointer by 1. Finally we need to check if the same condition is less than the value n in which case we increment the right pointer by 1. If the while loop condition is met and exited, we return false.

## Given Solution

## Thoughts after Solution

