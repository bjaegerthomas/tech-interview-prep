# Count Zeroes

## Task Overview
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

## Possible Logic
I would initialize three variables: start with a value of zero, end with a valuale of array length minus one, and total with a value of zero. I would initialize a varaible called values and make is a new set. I would first check to see if the array is empty in which case I would return a value of zero. I would then use the Set values, to see if the given array is all zeroes in which case I would return the length of the given array or if the array only contains one's in which case I would return a value of zero. Next a while loop which with a condition that start is less than end. Inside the loop I would intialize a variable middle which would find the middle of the current array using Math.floor of end minus start divided by two. Then I would initialize a variable named current and set it to the element at the current index of the array determined by the middle variable. After that, initialize a variable previous and set it to the current index minus one of the array. Next a conditional statement checking to see if current is equal to zero AND previous is equal to one. If it is we update total to the length of the array minus the index at middle position of the array plus one and break. Else if current is equal to one we will add one to start. Else we subtract one from end. Finally outside of the loop we return the total.

*UPDATE* few flaws with logic. I didn't add a check for when middle === 0. I also tried to assign a value to middle in another condition instead of checking if it was equal. My middle variable was taking in end minus start as opposed to end plus start. I was also adding one to this value later to define total in the loop but that means I would be off by one. And lastly I needed to place the original inputed array in as the argument when creating the new set.

*UPDATE* Now my code works with those fixes. Let's compare it the given solution and see what differences we can find.

## Given Solution
function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;
 
  return arr.length - firstZero
}
 
function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high)
    }
    return findFirst(arr, low, mid - 1)
  }
  return -1;
}

## Thoughts after Solution
Well, it would appear that they incorporated recursion into their solution which I wasn't sure if we should be doing just yet since it isn't covered until the next section. I do appreciate how this hones in on the first zero in the recursive function and kicks it back out to countZereos. I'm going to throw both solutions into chatgpt to see what their time and space complexities are.

*UPDATE* My solution is O(n) and theirs is O(log)n for both time and space.

