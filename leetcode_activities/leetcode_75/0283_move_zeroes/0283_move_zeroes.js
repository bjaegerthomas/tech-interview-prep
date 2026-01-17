//define function which accepts an array of integers nums: function moveZeroes (nums)
function moveZeroes (nums) {
    //define different pointers for two pointer approach, left pointer: let left = 0
    let left = 0;
    //define right pointer: let right = 0
    let right = 0;
    //define temporary value for switching: let temp = 0
    let temp = 0;
    //loop through all values in array as long as the right pointer doesn't exceed the total array values: while (right < nums.length)
    while (right < nums.length) {
        //check if the current value is equal to 0: if (nums[right] !== 0)
        if (nums[right] !== 0) {
            //if the current value is not a 0 then we need to swap the right and left values, temporarily store left value: temp = nums[left]
            temp = nums[left];
            //swap left with right value: nums[left] = nums[right]
            nums[left] = nums[right];
            //replace right value with former left value: nums[right] = temp
            nums[right] = temp;
            //increment the left pointer: left++
            left++;
        }
        //increment the right pointer: right++
        right++;
    }
    //return the arrray: return nums
    return nums;
}