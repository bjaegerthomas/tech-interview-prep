# Insertion Sort

## Task Overview
Implement insertionSort  . Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal. The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

## Possible Logic
First I need to pick the second element in the array and compare it to the sorted portion of the array. Looping over until I find the correct position for it.
Then move to the next element and check if it is in the correct position. Continue looping until all elements have been sorted and then return the array.

*UPDATE* My solution works, now lets see if it matches the given solution

## Given Solution
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

## Thoughts after Solution
The given solution only swaps the variable once, where as mine does it every time until it gets the element inserted into the correct place. Less cache memory used. Both have the same time complexity.
