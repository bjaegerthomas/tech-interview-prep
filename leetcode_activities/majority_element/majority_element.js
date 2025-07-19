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
    let maxVal = 0;
    let maxKey = 0;

    for (const key in count) {
        if (count[key] > maxVal) {
            maxVal = count[key];
            maxKey = key;
        }
    }
    return maxKey;
};
    

let nums = [4,5,2,3,4,2,5,6,6,6,3,3,4,4,4,4,5,2,1,5];
console.log (majorityElement(nums));