# Fibonnaci Sequence

## Task Overview
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

## Possible Logic
I need to create a function which accepts a whole number. Then I would create an array of numbers incrementally stepping through from 1 up to the number entered. Then there needs to be a base case where we have reached the end of the length of the newly created array. Then I would need to create the return line 1 + the recursive function with the argument using the slice method to remove the first index with each call. This would allow for each number to be used in the array and the base case would be satisfied because the array will eventually be empty.

*UPDATE* running into the issue of initializing the array inside of the function and not having it reset on each recursive call. Instead of the slice function do I increment through the array stepping up 1? But then I feel like i'm recreating the array each time.

## Given Solution


## Thoughts after Solution

