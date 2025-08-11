# Insertion Sort

## Task Overview
Create a sorting function which uses the left portion of the array as the sorted collection and compares other elements in the array as it loops over, placing those new elements into the sorted portion in ascending order.

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
