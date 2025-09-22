# Search Insert Position

## Task Overview
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

## Approach
//write function which accepts an array of sorted, non-repeating integers and a target value function searchInsert(nums, target)
//create an index counter let index = 0
//loop through array while (target !== nums[index] && target !> nums[index] && nums[index])
    //index++
//return index

*NOTE* I know this first attempt is linear and not using O log n time complexity like it asks for but i needed to at least get it out of my head first

Non-linear approach:

//write function which accepts an array of sorted, non-repeating integers and a target value function searchInsert(nums, target)
//establish 
//loop through array for (let i = 0; i < nums.length; i++)
    //establish middle let mid = (nums.length - i)/2
    //if (target > nums[mid])
        //i = mid
    //else if (target < nums[mid])

//return index

*NOTE* I only got part of the way through my version of the binary search before searching out the answer which I have included in the given solution below

## Given Solution

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // found it
        } else if (nums[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    // if not found, left is the insert position
    return left;
}

## Key Takeways
I was trying to get to this type of binary search but wasn't setting up my pointers correctly. I knew I needed to use a two pointer approach for the O log n time complexity but wasn't putting it together in my brain




