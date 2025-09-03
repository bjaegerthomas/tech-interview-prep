function twoSum(nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let k = 1; k < nums.length; k++) {
            answer = [i, k];
            if (nums[i] + nums[k] === target) return answer;
        }
    }
}