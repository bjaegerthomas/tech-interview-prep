# Indexes of Letters

## Problem

Write a function that takes a string of letters and returns an object that maps each letter to an array of all the indexes where that letter appears in the string.

## Solution Approach

1. Iterate over a for loop to take in a string and create a new object with the split method breaking it down into letters. Then use an if statement to determine if those individual letters have occured before and if so create a new list for each letter to hold the indices where that letter is located.
2. Time Complexity: O(n)
3. Space Complexity: O(n)