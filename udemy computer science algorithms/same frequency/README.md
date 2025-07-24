# Same Frequency

## Task Overview
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: Time: O(N)

## Possible Logic
I think maybe using a multiple pointer approach will allow for me to keep the time complexity down while also keeping a counter going for each number to determine if they are equal or not therefore determining a true or false value.

*Update* as I was trying to build this logic I ran into the issue of comparing values inside of a string at first and having the incorrect variable to determine the index. In addition I was trying to use the multiple pointer approach as opposed to doing two frequency counters for each integer entered and turning both into an object before finding out which element has the most frequency in that object and comparing that value with the same process in the second integer before finding out if those values are equal.

*Update* After asking about converting num1 and num2 into objects, chat gpt said i would need to turn them into strings first.

My code ended up not working.

## Given Solution

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
 
  let countNum1 = {};
  let countNum2 = {};
 
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
 
  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
 
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


## Thoughts after Solution

I was somewhat on the right track but overcomplicated the solution. I needed to be searching for the values by using the key for each of the string objects.