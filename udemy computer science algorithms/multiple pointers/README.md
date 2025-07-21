# Multiple Pointers Problem

## Task Overview
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

## Possible Logic
I think we use two pointers which move forward through the array. The second one acting as a scout and comparing itself to the first one. I am not in favor of changing the array by adding the current value back into the beginning of the array so I would like to keep a separate counter for finding the unique value. We can do this without a nested loop.

## Given Solution

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for ( var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[i] ++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

## Thoughts after Solution

I like this solution with the for loop because it also means I don't have to keep a separate counter for pointer 2. I am not a fan of replacing the first pointer value in the array because I don't see many scenarios where changing the original array in an effort to just count it's unique values is going to be helpful. I would imagine in most cases you will want your original data in tact.