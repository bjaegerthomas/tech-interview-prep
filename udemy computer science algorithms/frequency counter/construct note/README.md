# Construct Note

## Task Overview
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

## Possible Logic
I would think I would need to initialize two objects which would represent the two strings entered. I would then need to create a counter for each string. Then I would compare the two objects to see which keys are in the first object (message) as well as the second object (the letters). I would also compare the values associated with those keys. If the value of the message[key] is less than the value of the letter[key] then we can return true as long as that applies to all of the keys in the letter object that appear in the message object.


## Given Solution


## Thoughts after Solution

