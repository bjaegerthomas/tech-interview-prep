# Power

## Task Overview
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

## Possible Logic
Create a function which accepts two arguments. Inside the function there will be a while loop which uses the exponent (second argument) to determine the breaking point for the loop. It will then multiply the base (first argument) with a recursive call of the function for as many times as the exponent has been established before the loop is broken and the final value is returned.

*UPDATE* I still haven't looked at the solution yet but am wondering if i need to use a helper function so that my base and exponent variables don't keep reseting?

## Given Solution
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

## Thoughts after Solution
Ok, so once again I way overcomplicated with the use of a helper function. Also, I wasn't sure if i should leave the arguments section blank for the function definition line of code or if i should explicitly write in my variable names. I wanted to establish variable names for the arguments in the function definition line but ultimately thought I needed to keep it clear to somehow allow for the recursion. Turns out you can just change one of the argument values when calling the function again and manipulate it that way.
