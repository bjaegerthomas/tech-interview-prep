# Product of Array Except Self

## Task Overview
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

# Approach

//define function which accepts an array of integers nums: function productOfArrExceptSelf (nums)
    //define variable total: const total = nums.reduce((acc, num) => acc + num, 0)
    //define result array: let result = []
    //loop through array nums: for (let i = 0; i < nums.length; i++)
        //subtract current nums value from the total and push it to the result array: result.push(total - nums[i])
    //return the result: return result

ATTEMPT #2 with the correct problem parameters but obviously not in O(n) time:

//define function which accepts an array of integers nums: function productOfArrExceptSelf (nums)
    //define resulting array: let result = []
    //define current total: let currTotal = 1
    //loop through nums array: for (let i = 0; i < nums.length; i++)
        //loop through nums array: for (let k = 0; k < nums.length; k++)
            //check to see you aren't using the current i value of the nums array to tabulate your product: if (k !== i) currTotal *= nums[k]
        //push currTotal to result array: result.push(currTotal)
        //reset currProd: currProd = 1
    //return the result: return result

   
# Given Solution

var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;    
};

# Thoughts

Once again I did not read the problem carefully enough. I was trying to solve for addition when it wanted to multiply.

*UPDATE* Now after the given solution I can see somewhat how it is coming up with the answer but this seems like some discreet math conecpt that I would not have come up with on my own.
