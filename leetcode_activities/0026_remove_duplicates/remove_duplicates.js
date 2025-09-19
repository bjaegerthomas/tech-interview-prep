//define function removeDuplicates(nums)
function removeDuplicates(nums) {
    //let k = 0 counter for unique elements
    let k = 0;
    //loop through array for (let i = 1; i < nums.length; i++)
    for (let i = 1; i < nums.length; i++) {
        //if (nums[k] !== nums[i])
        if (nums[k] !== nums[i]) {
            //let k = i
            k = i
        }
        //else nums.slice(i)
        else {
            nums = nums.slice(i);
        }
    }
    //return k
    return k;
}