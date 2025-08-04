# Count Zeroes

## Task Overview
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

## Possible Logic
I would initialize three variables: start with a value of zero, end with a valuale of array length minus one, and total with a value of zero. I would initialize a varaible called values and make is a new set. I would first check to see if the array is empty in which case I would return a value of zero. I would then use the set values to see if the given array is all zeroes in which case I would return the length of the given array or if the array only contains one's in which case I would return a value of zero. Next a while loop which with a condition that start is less than end. Inside the loop I would intialize a variable middle which would find the middle of the current array using Math.floor of end minus start divided by two. Then I would initialize a variable named current and set it to the element at the current index of the array determined by the middle variable. After that, initialize a variable previous and set it to the current index minus one of the array. Next a conditional statement checking to see if current is equal to zero AND previous is equal to one. If it is we update total to the length of the array minus the index at middle position of the array plus one and break. Else if current is equal to one we will add one to start. Else we subtract one from end. Finally outside of the loop we return the total.

## Given Solution

## Thoughts after Solution

