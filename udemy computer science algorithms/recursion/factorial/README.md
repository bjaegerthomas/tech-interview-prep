# Factorial

## Task Overview
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

## Possible Logic
This should work fairly similarly to the power function. I should be able to take the same approach except instead of two arguments I will only have 1. I can just use the base number -1 inside of the argument of the recursive call of the function.

## Given Solution
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}

## Thoughts after Solution
Ok, so i was mostly right but I didn't take into account the edge case of a value less than zero.
