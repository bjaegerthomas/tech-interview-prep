// define function which accepts an array nums and a value to remove from the array where ever it occurs
function removeElement(nums, val) {
    //let k = 0 counter for elements left over in array which don't equal value
    let k = 0;
    //for (let i = 1; i < nums.length; i++) loop through all elements in nums
    for (let i = 1; i < nums.length - 1; i++) {
        //if (nums[i-1] !== val) if the previous element isn't equal to the value inputed
        //k++ increase the counter by 1
        if (nums[i-1] !== val) k++;
        //nums[i] = nums[i+1] let the current element equal the next element
        nums[i] = nums[i+1];
    }
    //return k
    return k;
}