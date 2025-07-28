# Average Pair

## Task Overview
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

## Possible Logic
I would want to create a left and right pointer. Inside of a while loop with the left pointer being less than the right pointer I would have a condition that if the sum of the value at the first pointer and the value at the second pointer, divided by 2 is equal to the provided avg then I would add them to an empty array called result. If the above condition is > than the avg I would I would subtract one from the right pointer, if it was < the avg I would add one to the left pointer.

*UPDATE* Just realized I have been solving this problem with the intent to return an array of value pairs that fit the criteria if they exist as opposed to just a true or false boolean answer if the array indeed has a value pair which meets the criteria. Regardless, let's see the solution.

## Given Solution
function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}

## Thoughts after Solution
I am on track with my logic and solution excpet i did not match the desired outcome. I went a bit above and beyond by returning value pairs instead of a boolean response. In addition, I learned a valuable prompt lesson in asking chat gpt not to give me the correct code when evaluating my solution but instead to check and see if my logic was sound. In this way, I was able to iterate my refactoring without being given the code.
