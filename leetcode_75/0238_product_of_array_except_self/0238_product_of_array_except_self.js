/*
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
*/

//define function which accepts an array of integers nums: function productOfArrExceptSelf (nums)
function productOfArrExceptSelf (nums) {
    //define resulting array: let result = []
    let result = [];
    //define current product: let currProd = 1
    let currProd = 1;
    //loop through nums array: for (let i = 0; i < nums.length; i++)
    for (let i = 0; i < nums.length; i++) {
        //loop through nums array: for (let k = 0; k < nums.length; k++)
        for (let k = 0; k < nums.length; k++) {
            //check to see you aren't using the current i value of the nums array to tabulate your product: if (k !== i) currProd *= nums[k]
            if (k !== i) currProd *= nums[k];
        }
        //push currProd to result array: result.push(currProd)
        result.push(currProd);
        //reset currProd: currProd = 1
        currProd = 1;

    }
    //return the result: return result
    return result;
}