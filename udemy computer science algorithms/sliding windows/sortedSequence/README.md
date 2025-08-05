# Sorted Sequence

## Task Overview
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array.

## Possible Logic
I'm going to take the same approach as the findZeroes problem but replace 0 with the inputed number variable. Just copying the code over and tweaking.

*UPDATE* Well, that didn't work. Need some further tweaking. But I think I am going straight to the given solution to see how they solved it.

## Given Solution
function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}
 
function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high)
    } else {
      return findFirst(arr, num, low, mid - 1)
    }
  }
  return -1
}

## Thoughts after Solution
Of course, I am not thinking about the fact that unlike find zeroes, this is a different inputed number each time and therefor needs to have a beginning and ending index, not just from the first number to the end of the array.