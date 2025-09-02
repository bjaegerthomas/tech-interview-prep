function twoSum(nums,target){
    let answer = [];
    for (let i = 0; i < nums.length; i++){
        for (let k = 1; k < nums.length; k++){
            answer = [nums[i], nums[k]];
            if (nums[i] + nums[k] === target) break;
        }
    }
    return answer;
}