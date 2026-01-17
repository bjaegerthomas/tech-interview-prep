# Container With Most Water

## Task Overview
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

# Approach
//define function which accepts an array of integers, height: function containerWithMostWater (height)
    //define left pointer: let lp = 0
    //define right pointer: let rp = height.length - 1
    //define maximum area: let maxA = 0
    //define current area: let currA = 0
    //loop through array: while (left < right)
        //determine width of current container: let width = Math.abs(lp - rp)
        //determin the height of the current container: let height = Math.min(lp, rp)
        //determine current area: currA = width * height
        //check which area is larger: maxA = Math.max(maxA, currA)
        //check which height is bigger so you can increment or decrment pointers accordingly: if (lp > rp)
            //if this is true we keep the lp pointer the same and decrement rp: rp--
        //otherwise we increment lp: else lp++
    //return the maximum area: return maxA


# Given Solution

# Thoughts




