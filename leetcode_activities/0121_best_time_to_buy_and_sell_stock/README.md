# Best Time to Buy and Sell Stock

## Task Overview

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

# Approach

Brute Force:

//define function which accepts an array prices - function maxProfit(prices)
    //define placeholder for profit - let currP = 0
    //define placeholder for maximum profit - let maxP = 0
    //loop through array - for (let i = 0; i < prices.length; i++)
        //loop through array - for (let j = 1; j< prices.length; j++)
            //determine current profit - currP = prices[j] - prices[i]
            //check if current profit > maximum profit - if (currP > maxP)
                //if it is greater let the maximum profit = curre profit - maxP = currP
    //return the maximum profit - return maxP

Two Pointer:

//define function which accepts an array prices - function maxProfit(prices)
    //define left window: let left = 0
    //define maximum profit: let maxP = 0
    //loop through the array and define right window: for (let right = 1; right < price.length; right++)
        //define current profit: let currP = prices[right] - prices[left]
        //check if current profit is greater than maximum profit: if (currP > maxP)
            //let the maximum profit = the current profit: maxP = currP
            //increase the left window: left++
        //if current profit is not greater than max profit: else
            //replace the right value with the left value: prices[right] = prices[left]
    //return maximum profit: return maxP


# Given Solution

var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;    
};

# Thoughts

I made this more complicated than it needed to be