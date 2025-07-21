# Multiple Pointers Problem

## Task Overview
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

## Possible Logic
I think we use two pointers which move forward through the array. The second one acting as a scout and comparing itself to the first one. I am not in favor of changing the array by adding the current value back into the beginning of the array so I would like to keep a separate counter for finding the unique value. We can do this without a nested loop.


## Thoughts after Solution
