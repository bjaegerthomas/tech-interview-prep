# Sorted Sequence

## Task Overview
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

## Possible Logic
I'm going to use some of the logic of sorted sequence and tweak it. I need to figure out where the lowest element is first to establish the start of my window so i can then look for the middle and find the actual value num. I should be able to throw an extra if condition into the findFirst recursion function that checks to see if the low is greater than or equal to high in which case we can add one to low and return a recursive call of the same function. This will keep looping until we find the lowest number and can then set that to our beginning index. I also need to tweak the main function findRotatedIndex so that it returns the index, not the number of times that inputed number occurs. Also, there is no point in determining an ending index, because we don't need it in order to find the index where the number occurs.

*UPDATE* after trying to run it, I obviously forgot to change the name of the original function call. Also the max stack size was exceeded which means I am incrementing incorrectly in some fashion or not incrementing correctly and therefore stuck in an infinite loop. Time to ask gpt about my logic.

*UPDATE* Here is the version which gpt gave:
function findRotatedIndex(arr, num) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Found the target
    if (arr[mid] === num) return mid;

    // Left side is sorted
    if (arr[low] <= arr[mid]) {
      if (num >= arr[low] && num < arr[mid]) {
        high = mid - 1; // num is in the left sorted half
      } else {
        low = mid + 1; // num is in the right half
      }
    }

    // Right side is sorted
    else {
      if (num > arr[mid] && num <= arr[high]) {
        low = mid + 1; // num is in the right sorted half
      } else {
        high = mid - 1; // num is in the left half
      }
    }
  }

  return -1; // not found
}

Now let's see the version the course guide gave.

## Given Solution

function findRotatedIndex(array, num) {
  var pivot = findPivot(array)
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}
 
function binarySearch(array, num, start = 0, end = array.length - 1) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;
 
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
 
function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}

## Thoughts after Solution
His solution is longer but I appreciate the breakdown into three function's for easier understanding of what each piece is doing and how they add up to the whole solution. Gives a better understanding at a glance the logci of how he is going about solving the problem.