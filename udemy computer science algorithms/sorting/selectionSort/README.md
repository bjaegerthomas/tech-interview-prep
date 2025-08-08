# Selection Sort

## Task Overview
Create a function which accepts an array and sorts those values from lowest to highest by comparing adjacent elements one at a time to find the current minimum value and once it loops through the array, swaps the inital index with the minimum value. Then the process repeats until the inputed array is sorted.

## Possible Logic
I want to create a swap function to make it easier for readability. I will place that inside the main function. I need a for loop to loop through the entire array and then iside that a nested for loop to compare the two adjacent numbers as it goes down the line and to store a temporary smallest number which will replace the current zero index element using the swap function once it makes it's way through the entire array. Evrytime through the window of comparison will become smaller as we lock in the next smallest element. Eventually we will return a sorted array.

*UPDATE* I suppose we're not really swapping so much as finding the smallest and updating that variable. Will rethink if I need a function or not

## Given Solution

## Thoughts after Solution

