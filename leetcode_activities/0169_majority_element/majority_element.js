/* function majorityElement(nums) {

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
console.log (majorityElement(nums)); */

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
 
/* function freq(nums) {
    // similar to the frequency counter but transitioning it to a vote
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;  // Set new candidate
        }
        count += (num === candidate) ? 1 : -1; // Vote for or against
    }

    return candidate;
}; */

/*

The result AI came up with

function pluralityElement(nums) {
    const countMap = {};     // Store frequency of each number
    let maxCount = 0;        // Highest frequency found
    let result = nums[0];    // Default result (in case of tie, first seen wins)

    for (let num of nums) {
        // Initialize or increment the count
        countMap[num] = (countMap[num] || 0) + 1;

        // If this number has a higher count than current max, update result
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            result = num;
        }
    }

    return result;
}
    
*/

//define function which accepts an array of integers nums - function majorityElement(nums)
function majorityElement(nums) {
    //define hashmap - let numsMap = new Map ()
    let numsMap = new Map ();
    //define counter to keep track of element with largest number of occurences - let counter = 0
    let counter = 0;
    //define majority to be the lement with the most occurences - let majority = 0
    let majority = 0;
    //loop through array and build numsMap - for (let num of nums)
    for (let num of nums) {
        //check if key exists, if it doesn't exist, create it and establish its value as 0 and add 1 or simply add 1 to the key as it already exists - numsMap.set(num, (numsMap.get(num) ?? 0) + 1)
        numsMap.set(num, (numsMap.get(num) ?? 0) + 1);
        //check if current key's value is greater than counter - if (numsMap.get(num) > counter)
        if (numsMap.get(num) > counter) {
            //if it is greater set the counter to the cureent highest number of occurences - counter = numsMap.get(num)
            counter = numsMap.get(num);
            //and also update majority to the current num - majority = num
            majority = num;
        }
    }
    //return majority
    return majority;
}