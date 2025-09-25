/* function twoSum(nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let k = 1; k < nums.length; k++) {
            answer = [i, k];
            if (nums[i] + nums[k] === target) return answer;
        }
    }
} */

//function twoSum (nums, target) define function which accepts an array of integers and a target value which will be the sum of two elements within the array
function twoSum (nums, target) {
    //let numsObj = new Map() create object to search for the complimenatry value as a key and map it's cooresponding indexes to it
    let numsObj = new Map();
    //for (let i = 0, i < nums.length; i++) loop through elements in nums
    for (let i = 0; i < nums.length; i++) {
        //let compliment = target - nums[i] let the complimentary element be equal to the target value - the current element
        let compliment = target - nums[i];
        //if (numsObj.has(compliment) && compliment != nums[i]) check to see if the new object has the complimentary element and it's not equal to the current element in the original array
        if (numsObj.has(compliment) && compliment != nums[i]) {
            //return numsObj.get(compliment), i return the compliment's key value pair (it's indexes) and the current element's counter
            return numsObj.get(compliment), i;
        }
        //numsObj.set(compliment, i) if the compliment doesn't already exist, then set it in the new obj as the key and make it's value pair = to i
        numsObj.set(compliment, i);
    }
}