# Range

## Task Overview
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

## Possible Logic
This should work very much like the power and product of array problems. I just need to figure out what the base case is to break the cycle. The function will accept a number. The base case being if the num = 0 then I would return 0 ending the loop. The argument inside the recursive function call should be num -1.

*UPDATE* My solution works. Let's see how they solved it and any differences.

## Given Solution
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

## Thoughts after Solution
It seems on these easier problems i am picking up the pattern and having less issues with the second iteration of a similar problem but get stumped the first time around when a new variance is introduced.
