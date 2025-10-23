//define a function which accepts an array of integers "nums" and a second integer k:
//function maxAvgSub(nums, k)
    //define left window: let left = 0
    //define right window: let right = 0
    //define maximum average subarray: let maxSub = 0
    //define total: let total = 0
    //loop through nums to find current avg subarray:
    //while (right < left + k && left + k > nums.length)
        //determine the current total: total += nums[right]
        //increment right: right++