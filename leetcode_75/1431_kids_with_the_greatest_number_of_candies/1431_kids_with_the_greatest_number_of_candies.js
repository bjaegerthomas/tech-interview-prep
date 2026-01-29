//define function which accepts an array candies of integers and a value extraCandies also an integer: function kidsWithGreatestNumberCandies (candies, extraCandies)
function kidsWithGreatestNumberCandies (candies, extraCandies) {
    //define array result: let result = []
    let result = [];
    //define variable greatest: let greatest = Math.max(...candies)
    let greatest = Math.max(...candies);
    //loop through the array candies so we can compare the count: for (let i = 0; i < candies.length; i++)
    for (let i = 0; i < candies.length; i++) {
        //check if current value at index i is largest after adding extra cadnies to it: if (candies[i] + extraCandies < greatest)
        //if not true then push false to result array: result.push(false)
        if (candies[i] + extraCandies < greatest) result.push(false);
        //if it is true, then push true to the result array: else result.push(true)
        else result.push (true);
    }
    //return the result array: return result
    return result;
}