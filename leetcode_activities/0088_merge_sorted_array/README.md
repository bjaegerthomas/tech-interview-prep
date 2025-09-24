# Merge Sorted Array

## Task Overview

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

## Approach
//define function which accepts two arrrays and two values function merge (nums1, m, nums2, n)
    //define counter variable let count = 0
    //while (count < m + n)
        //if (nums1[count] != 0 || null) check if the element at count in 1st arr isn't zero or doesn't exist
            //if (nums1[count] <= nums2[count]) check if element at count in 1st arr is less than or equal to the element at count in 2nd arr
                //nums1.splice(count+1, 0, nums2[count]) if so then that means the element in the 2nd array should come after the element in the 1st
            //nums1.splice(count-1, 0, nums2[count]) other wise it should come before
        //else nums1[count] = nums2[count] if element in first array is = to 0 then replace it with the current element in the 2nd array
        //counter++ increase the counter before cycling through the loop again

## Given Solution

var merge = function(nums1, m, nums2, n) {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--;
    }    
};

## Key Takeways
I like that this is working from the right backwards since the first elements of nums1 are already established. It also takes into account that the while loop conditional knows it needs to completely loop through nums2 before the solution can be acheived.




