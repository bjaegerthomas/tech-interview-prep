function majorityElement(nums) {

    const count = {};

        for (const num of nums) {
            if (count[num]) {
            count[num] += 1;
            }
            else {
                count[num] = 1;
            }
        }
    const majority = count.max();
    return majority;
};
    

let nums = [4,5,2,3,4,2,5,6,6,6,3,3,4,4,4,4,5,2,1,5];
console.log (majorityElement(nums));