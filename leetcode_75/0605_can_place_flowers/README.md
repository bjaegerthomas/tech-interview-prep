# Can Place Flowers

## Task Overview

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

# Approach

//define a function which accepts an array flowerbed and an integer n: function canPlaceFlowers (flowerbed, n)
    //loop through flowerbed array: for (let i = 0; i < flowerbed.length; i++)
        //check to see if our flower counter n has been depleted, if it has, exit the loop and return true: if (n = 0) return true
        //check to see if current value at flowerbed[i] is a 0 and if the prev and next values are a 1: if (flowerbed[i] !== 1 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1)
            //if the above conditions are met, change the current value at index i to 1: flowerbed[i] = 1
            //also decrement the n variable by 1: n--
    //if we exit the loop without depleting our flower counter n, then there wasn't enough space and we have to return false: return false

      
# Given Solution

ChatGPT correct version of my code:

function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {

        // If we placed all flowers needed, return true
        if (n === 0) return true;

        // Check if current spot is empty (0)
        if (flowerbed[i] === 0) {

            // Check left side (treat out-of-bounds as empty)
            let leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);

            // Check right side (treat out-of-bounds as empty)
            let rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

            // If both neighbors are empty, we can plant a flower
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1;  // place flower
                n--;               // reduce remaining flowers
            }
        }
    }

    // After loop, check if all flowers were placed
    return n === 0;
}

Given Solution on Leetcode:

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        
        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;   
};

# Thoughts

I like the second version because it takes the same thought process and makes it a cleaner code base with less lines. It also combines to the two conditional checks in the GPT generated version and combines them with the left and right check. It also makes them a constant based on the current value at i.