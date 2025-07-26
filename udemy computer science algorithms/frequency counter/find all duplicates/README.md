# Find All Duplicates

## Task Overview
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

## Possible Logic
Seeing as how it wants me to return an array with only the elements which appear twice, I am womdering if I need to turn the initial array into an object and then back into an array again or if that over complicates things. My thought is I would create a frequency counter for the entire array, turning the intial array into an object and then counting the number of times each element appears. I would intitalize an empty array called result and then use a conditional statement in a loop to determine if an element appears more than once in the object and then would push that key element to the result array. At the end I would return the result array.

*UPDATE* Something is off in my logic. It returned an array but not the correct elements. I think I was accessing the values as opposed to the keys in my second for loop and I also didn't increment.

*UPDATE* After discussing with gpt my logic was slightly off and I learned about the Number function which helps convert a string to a number which was helpful for converting the keys from the object into numbers for the result array. 

## Given Solution
function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i])
  }
  return ans;
}

## Thoughts after Solution
