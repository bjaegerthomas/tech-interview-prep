# Linear Search

## Task Overview
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

## Possible Logic
I can create a for loop to loop through every element in the array and check it against the inputed value.

*UPDATE* My solution works and is the brute force way of doing indexof. Also, it would be kind of sad if I wasn't able to code this simplistic of an exercise. I also added an edge case of an empty array into the mix. Let's see what the given solution is. Also, now that I look at my code, the edge case conditional statement should probably be made outside of the for loop.

## Given Solution
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

## Thoughts after Solution
Straight forward approach. Mine is the same as the given.

