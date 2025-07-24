# Product of Array

## Task Overview
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

## Possible Logic
This should be similar to a factorial style recursion problem except I will have to implement the indexes of an object which I convert from the array of values given as an argument. This way, the argument for the recursive call would be the objects key, incremented by 1 each time through until the length of the object has been met. This may actually require a for loop so i can use the counter as my index value.

*UPDATE* Not sure I need to change the array into an object.

## Given Solution
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

## Thoughts after Solution
I was originally thinking of conditional statment in the solution as being my edge case for when someone originally enters an empty array but it is my base case. I don't need the for loop because the recursive call here just slices away the next value each call until there is nothing left.
