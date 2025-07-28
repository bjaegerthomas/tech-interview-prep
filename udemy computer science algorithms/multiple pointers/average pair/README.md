# Average Pair

## Task Overview
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

## Possible Logic
I would want to create a left and right pointer. Inside of a while loop with the left pointer being less than the right pointer I would have a condition that if the sum of the value at the first pointer and the value at the second pointer, divided by 2 is equal to the provided avg then I would add them to an empty array called result. If the above condition is > than the avg I would I would subtract one from the right pointer, if it was < the avg I would add one to the left pointer.

## Given Solution

## Thoughts after Solution

