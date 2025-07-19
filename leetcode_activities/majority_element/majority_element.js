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

/* Low level breakdown from chatgpt and it's solution given the same problem

    function majorityElement(nums) {
        let count = 0;         // Counter for tracking candidate support
        let candidate = null;  // Current majority candidate

        for (let num of nums) {
            if (count === 0) {
                candidate = num;  // Set new candidate
            }
            count += (num === candidate) ? 1 : -1; // Vote for or against
        }

        return candidate;
    }

    💡 How it works:
    
    count === 0: You’re allowed to change your vote to a new candidate.

    num === candidate: We reinforce our belief this is the majority.

    num !== candidate: We reduce confidence — maybe it's not the majority.

    Eventually, the majority element will outweigh all others combined, so it wins.

*/