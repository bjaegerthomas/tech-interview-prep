# Minimum Subarray Length

## Task Overview
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

## Possible Logic
First an edge case check for an inputed empty array and a return value of null. Second, I would need to initialize a variable named newSum setting it to zero which will hold the current sum of the subarray evaluated in the sliding window. I would also initialize a counter named minLen with a value of zero. Next a while loop with a condition that newSum is less than the inputed integer, sum. Inside the while loop we would continue to add the element at each index of the array to newSum, using minLen to indicate the index. Next we need to check that the counter minLen isn't greater than the length of the original array or else we need to return a value of 0. Then we can increment the minLen counter by one afterwards. Outside of that loop we would initialize a second variable newLen and set it equal to minLen. Then we can start a for loop which will have a counter i set to newLen and a condition which makes sure newLen isn't greater than the length of the original array. Inside this for loop we would make newSum equal to newSum minus the value leaving the window and adding the new value coming into the window, using i to acces the index of the array. Then a conditional statement checking to see if newSum is greater than or equal to sum, if it is a nested conditional statment checking to see if i is less than minLen if it is, we set minLen equal to i. Outside of the for loop we will return the value of minLen.

*UPDATE* My solution is currently returning a value of 0, and 10 which means there is a hole in my logic and I am using an incorrect assignment of a variable somewhere. Going to confer with chatgpt about my logic without solving my code to see where I can tinker.

*UPDATE* I was definitely using the wrong syntax for checking for an empty array. I'm going to try and change my while loop to a for loop and initialize minLen as my counter.

*UPDATE* While loop has been changed to a for loop with some of the logic of the while loop. I moved the edge case check of the sliding window length extending beyond the original array length into the main body of the function so it will exit the function instead of continuing on and giving an answer in addition to the zero value. I had a capitilization issue with minLen in the for loop which has been resolved. Also, i didn't declare the variable minLen outside of the local scope of the first for loop. Needed to update old num variable name to sum.

*UPDATE* I've been asking gpt to look at logic without giving answers but am hitting a wall with how i am thinking about this logically. Going to add the given solution shortly and see what the differences are, because gpt's version was much simpler than what I am trying to do and did end up using a while loop like I had originally tried to do. Adding their version below as a comparison as well:

*side not* I need to start adding some comments to explain at least what certain portions of code block are doing.

function minSubarrayLen(arr, sum) {
  let minLen = Infinity;
  let start = 0;
  let end = 0;
  let total = 0;

  while (start < arr.length) {
    // Expand window to the right as long as total is less than target
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    }
    // If total is enough, try to shrink window from the left
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // If total is less than sum but end has hit the array boundary
    else {
      break;
    }
  }

## Given Solution

## Thoughts after Solution



