//define function which accepts an array nums - function moveZeroes (nums)
function moveZeroes (nums) {
    //define left side of window - let left = 0
    let left = 0;
    //define right side of window - let right = 0
    let right = 0;
    //define temporary value holder - let temp = 0
    let temp = 0;
    //loop through array - while (right > nums.length)
    while (right > nums.length) {
        //check if current value is a zero - if (nums[right] !== 0)
        if (nums[right] !== 0) {
            //if value is not equal to 0 we need to switch the values of the left and 
            //right indexes of nums - nums[left] = temp
            nums[left] = temp;
            //nums[left] = nums[right]
            nums[left] = nums[right];
            //nums[right] = temp
            nums[right] = temp;
            //increase the left index - left++
            left++;
        }
        //increase the right index - right++
        right++;
    }
    //return the array - return nums
    return nums;
}