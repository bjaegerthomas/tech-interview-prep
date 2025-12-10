//define function which accepts an array of integers nums: function productOfArrExceptSelf (nums)
function productOfArrExceptSelf (nums) {
    //define variable total: const total = nums.reduce((acc, num) => acc + num, 0)
    const total = nums.reduce((acc, num) => acc + num, 0);
    //define result array: let result = []
    let result = [];
    //loop through array nums: for (let i = 0; i < nums.length; i++)
    for (let i = 0; i < nums.length; i++) {
        //subtract current nums value from the total and push it to the result array: result.push(total - nums[i])
        result.push(total - nums[i]);
    }
    //return the result: return result
    return result;
}