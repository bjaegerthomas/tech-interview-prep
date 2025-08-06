# Binary Search

## Task Overview
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

## Possible Logic
We need to initialize two pointers a left and a right to establish our window for dividing and conquering as well as a middle variable to identify our halfway point between the two. We then need a while loop which has a condition that the left pointer be less than the right pointer. Inside the loop we need to update middle and check if the element at the index of the avg of the differnce between the left and right pointer is equal to the inputed number. If it is we return middle. Else if it's less than the inputed number we need to increase the left side. Else decrease the right side by one. If we don't find the value and the while loop breaks, we return negative one.

## Given Solution
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

## Thoughts after Solution
I like the addition of a second argument in the while loop but I think my version is also equally clean. Also I like the fact that I don't have to declare the math inside of the update to middle. I'm going to check both in gpt for time and space complexity but i have a feeling they are the same.

*UPDATE* Both are the same for both complexities.

