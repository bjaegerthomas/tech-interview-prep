//define function which accepts an array prices - function maxProfit(prices)
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
}