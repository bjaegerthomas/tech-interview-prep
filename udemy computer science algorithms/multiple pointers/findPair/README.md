# Find Pair

## Task Overview
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

## Possible Logic
First we need to sort the array. Next we need to initialize two pointers which will be placed at the beginning of the array and end of the array respectfully. Next create a while loop with a condition which checks if the beginning pointer is less than the end pointer. Inside the loop we need a condition which checks if the array value at end index minus the array value at begin index is equal to n, if so we return true. Then we need to check and see if the same condition is greater than n in which case we decrement the left pointer by 1. Finally we need to check if the same condition is less than the value n in which case we increment the right pointer by 1. If the while loop condition is met and exited, we return false.

*UPDATE* If the condition is greater than n I need to decrement the right pointer by 1. If the condition is less than n I need to increment the left pointer by 1.

*UPDATE* I had created a variable called val which calculated the difference between the arr value at the right index and the arr value at the left index but I had it ouside my while loop so the val never changed resulting in a false return. I changed that and now my function works.

## Given Solution

// O(n) space + O(n) time
function findPair(arr, n) {
  // if n is 0, we just need to see if there's any duplicate in the array
  if (n === 0) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
 
  // for non-zero n, place all elements in a set
  const setVals = new Set(arr);
 
  // check for val + n or val - n in the set
  for (let val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) {
      return true;
    }
  }
 
  return false;
}
 
// O(1) space + O(n log n) time
function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true
    } else if (arr[j] - arr[i] < num) {
      j++
    } else {
      i++
    }
  }
  return false;
}

## Thoughts after Solution
His second solution is closer to mine so I will comment on that first. I didn't realize that my sort needed to have a condition in it to account for the ascending or descending order of values but that makes sense given that otherwise it would sort the array lexicographically. I also didn't think about whether or not my left or right pointer might be pointing to the same value. In addition I wasn't aware I needed to use math.abs for the absolute value of my difference and my inputed number. Other than that my solution was fairly on the same track with logic and syntax.

The first solution is interesting because I keep forgetting about the ability to create a set which makes an object I can compare with only unique values and while preserving the original inserted order. It also allows for faster lookups than an array. It also looks to see if there any duplicates in the array as a first condition in the event n = 0 which is a good first check for true.

