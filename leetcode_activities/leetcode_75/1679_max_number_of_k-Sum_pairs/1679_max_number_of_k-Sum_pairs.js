//define a function which accepts an array nums and an integer k: function maxOperations (nums, k)
function maxOperations (nums, k) {
    //define left pointer: let lp = 0
    let lp = 0;
    //define right pointer: let rp = nums.length - 1
    let rp = nums.length - 1;
    //define operations counter: maxOp = 0
    maxOp = 0;
    //loop through array: while (lp < rp)
    while (lp < rp || nums.length !== 0) {
        //check if current values add up to k: if (nums[lp] + nums[rp] == k)
        if (nums[lp] + nums[rp] == k) {
            //if true increase operations counter: maxOp++
            maxOp++;
            //remove value at index lp from array: nums.slice(lp,1)
            nums.slice(lp,1);
            //remove value at index rp from array: nums.slice(rp,1)
            nums.slice(rp,1);
            //reset rp value: rp = nums.length - 1
            rp = nums.length - 1;
        }
        //if it doesn't add up decrement rp and check again: else rp--
        else rp--;
    }
    //return the maximum number o operations: return maxOp
    return maxOp;
}