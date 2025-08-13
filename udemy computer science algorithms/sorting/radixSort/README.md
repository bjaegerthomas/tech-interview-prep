# Radix Sort

## Task Overview
Implement a function called getDigit  which accepts a positive integer and a position, and returns the digit in that number at the given position. The position reads from right to left, so the 0th position corresponds to the rightmost digit.

Implement a function called digitCount  which accepts a positive integer and returns the number of digits that the integer has.

Implement a function called mostDigits  which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.

It may help to use your digitCount  code from the previous exercise in this function.

Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.

You'll need to make use of the helper functions from the previous exercises here. Good luck!

## Possible Logic
This is a bit more complicated and so I am merely watching his explanation of it and and the code break down rather than attempt it on my own before seeing the final solution.

## Given Solution
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

## Thoughts after Solution

