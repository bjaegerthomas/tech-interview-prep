// Brute Force

//define function which accepts an array nums - function containsDuplicate(nums)
function containsDuplicate(nums) {
    //loop through array - for (let i = 0; i < nums.length; i++)
    for (let i = 0; i < nums.length; i++) {
        //loop through array again - for (let j = i+1; j < nums.length; j++)
        for (let j = i+1; j < nums.length; j++) {
        //check to see if element at first index is equal to element at second index - if (nums[i] == nums[j])
            //if they are equal return true - return true
            if (nums[i] == nums[j]) return true;
        }
    }
    //if you make it through the loop with exiting as true, return false - return false
    return false;
}

// Hash map

//define function which accepts an array nums - function containsDuplicate()
function containsDuplicate(nums) {
    //define counter for a hashmap to keep track of the values of the keys - let counter = new Map()
    let counter = new Map();
    //loop through nums to establish the hashmap - for (let num of nums)
    for (let num of nums) {
        //check if num exists in counter if it doesn't, establish it and add 1 to the key's value, if it does add one to the key's value - counter.set(num, (counter.get(num) ?? 0) + 1)
        counter.set(num, (counter.get(num) ?? 0) + 1);
        //check if counter's current key has a value greater than 1, if it does, return true - if (counter.get(num) > 1) return true
        if (counter.get(num) > 1) return true;
    }
    //if you make it through the loop without finding any duplicate numbers return false - return false
    return false;
}

// Shortest version given by ChatGpt - Set Comparison
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}