# Maximum Average Subarray I

## Task Overview
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

# Approach
//define a function which accepts an array of integers nums and a value k: function maxAvgSub (nums, k)
    //define maximum avg variable: let maxA = 0
    //define current avg variable: let currA = 0
    //define left pointer

# Given Solution

var findMaxAverage = function(nums, k) {

    currentSum=0;
    //find sum of first k elements(eg. like window of k elements)
    for(let i=0; i<k; i++){
        currentSum += nums[i];
    }

    let maxSum= currentSum;
    //Slide the fixed k elemnt of window through the rest of the array
    for(let i =k; i<nums.length; i++){
        //Remove the element going out of window so that we can move window to next to add
        currentSum -= nums[i-k];
         
        currentSum += nums[i];//Add the new element coming into window

        maxSum = Math.max(maxSum, currentSum);//check for maxSum
    }
    return maxSum/k;
};

# Thoughts
