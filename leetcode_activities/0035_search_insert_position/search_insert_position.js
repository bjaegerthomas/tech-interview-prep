//write function which accepts an array of sorted, non-repeating integers and a target value function searchInsert(nums, target)
function searchInsert(nums, target) {
//create an index counter let index = 0
let index = 0;
//loop through array while (index < nums.length && nums[index] < target)
    while (index < nums.length && nums[index] < target) {
        //index++
        index++;
    }
    //return index
    return index;
}