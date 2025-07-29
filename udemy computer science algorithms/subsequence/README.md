# Subsequence

## Task Overview
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

## Possible Logic
First we need to take in two strings to the function. We then create an array for each string by splitting each into individual letters. Then initialize a variable to be the first pointer which will work through all of the first array acting as the index for the first string. Also create a second variable to be the second pointer for the second array. Next create a while loop with the condition that the first string counter is <= the length of the first array -1. Inside the while loop I would create a condition to check if the index of the first array and the index of the second array are equal. If they are, increase both pointers count. If they aren't equal, only increase the right pointer(second array). If the second array pointer runs out of indexes we return a false value. If we make it out of the while loop we can return true. This way we iterate through the second array until we find all of the elements in the first array or exhaust the search and return a false.

*UPDATE* My code seems to work! Let's check the solution and see the difference.

## Given Solution

## Thoughts after Solution
