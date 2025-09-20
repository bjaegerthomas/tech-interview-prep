// define function which accepts an array nums and a value to remove from the array where ever it occurs
function removeElement(nums, val) {
    //let k = 0 counter for elements left over in array which don't equal value
    let k = 0;
    //for (let i = 1; i < nums.length; i++) loop through all elements in nums
    for (let i = 1; i < nums.length; i++) {
        //if (nums[k] !== val) if the element at the current count index isn't equal to the value inputed
        //k++ increase the counter by 1
        if (nums[k] !== val) k++;
        //nums[k] = nums[i] let the current element equal the next element
        nums[k] = nums[i];
    }
    //return k
    return k;
}