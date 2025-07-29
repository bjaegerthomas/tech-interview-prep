# Max Subarray Sum

## Task Overview
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

## Possible Logic
First we will accept two inputs, one is an array of integers and the other a number denoting the length of our sub array. Next we need to initialize two variables, one will hold a maximum sum overall and the other a temporary sum we will compare to the maxSum as we slide the window along the array. Next we'll need a for loop with a counter and it will run for the length of the subarray. It will add all of the values in the sub array, store it in maxSum and return that value. We then need to make tempSum equal maxSum so we can update it in the next loop. Next we create a second for loop to move the window along through the length of the array. The counter i will be set to the length of the subarray and the loop will run for as long as i is less than the length of the overall array, which allows the window to slide to the end of the array. Next we will need to update the variable tempSum by subtracting from it the element which just left the window and add to it the element which is now enetering the window. We then need to compare this new tempSum with the current maxSum and update the maxSum to whichever is larger. once the loop is complete we return the maxSum value.

Full disclosure I watched the video again on sliding windows and the example they gave was this exact problem so it was hard to not kind of know what they were looking for.

## Given Solution

## Thoughts after Solution


