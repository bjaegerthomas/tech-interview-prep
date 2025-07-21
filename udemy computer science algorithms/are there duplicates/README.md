# Are There Duplicates - Frequency Counter with multiple pointers

## Task Overview
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

## Possible Logic
I want to attempt the multiple pointers pattern. Honestly I think using a sliding window approach might get us closer to lgo(n) time complexity.

## Given Solution
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

## Thoughts after Solution
I'm a little stumped on the syntax here. Are you allowed to use the term arguments and the code understands you mean whatever values were fed into the function?
*UPDATE* after running it through gpt and asking for a line by line breakdown I now understand that yes, using the object "arguments" allows for an array type object to be created with whatever values have been entered into the function.
