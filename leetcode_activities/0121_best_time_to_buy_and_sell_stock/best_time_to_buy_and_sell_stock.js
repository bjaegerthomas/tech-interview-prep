/* //define function which accepts an array prices - function maxProfit(prices)
function maxProfit(prices) {
    //define placeholder for profit - let currP = 0
    let currP = 0;
    //define placeholder for maximum profit - let maxP = 0
    let maxP = 0;
    //loop through array - for (let i = 0; i < prices.length; i++)
    for (let i = 0; i < prices.length; i++) {
        //loop through array - for (let j = 1; j< prices.length; j++)
        for (let j = 1; j< prices.length; j++) {
            //determine current profit - currP = prices[j] - prices[i]
            currP = prices[j] - prices[i];
            //check if current profit > maximum profit - if (currP > maxP)
                //if it is greater let the maximum profit = curre profit - maxP = currP
            if (currP > maxP) maxP = currP;
        }
    }
    //return the maximum profit - return maxP
    return maxP;
} */

//define function which accepts an array prices - function maxProfit(prices)
function maxProfit(prices) {
    //define left window: let left = 0
    let left = 0;
    //define maximum profit: let maxP = 0
    let maxP = 0;
    //loop through the array and define right window: for (let right = 1; right < price.length; right++)
    for (let right = 1; right < price.length; right++) {
        //define current profit: let currP = prices[right] - prices[left]
        let currP = prices[right] - prices[left];
        //check if current profit is greater than maximum profit: if (currP > maxP)
        if (currP > maxP) {
            //let the maximum profit = the current profit: maxP = currP
            maxP = currP;
            //increase the left window: left++
            left++;
        }
        //if current profit is not greater than max profit: else
        else {
            //replace the right value with the left value: prices[right] = prices[left]
            prices[right] = prices[left];
        }
    }
    //return maximum profit: return maxP
    return maxP;
}