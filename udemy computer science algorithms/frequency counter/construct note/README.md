# Construct Note

## Task Overview
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

## Possible Logic
I would think I would need to initialize two objects which would represent the two strings entered. I would then need to create a counter for each string. Then I would compare the two objects to see which keys are in the first object (message) as well as the second object (the letters). I would also compare the values associated with those keys. If the value of the message[key] is less than the value of the letter[key] then we can return true as long as that applies to all of the keys in the letter object that appear in the message object.

*UPDATE* after working through some of the obvious syntax errors from the last commit, my logic was off because i was comparing indexes as opposed to actual letters or keys in the object. By creating a conditional statement (with the help of gpt while asking them not give me an alternative solution but help me understand there error in my logic) that checks if the letter doesn't exist in the msg object or if the value of that letter is less than the value of the same letter in the msg object while looping over every letter in the ltr object, then i can return false. Otherwise once that for loop is done I can return true.

*UPDATE* i've cleaned up the syntax and used "in" instead of "of" for my for loop in order to work with an object. gpt also says that I don't need the sort method anymore either since we are looking at frequency count as opposed to order. It was left over from my previous logic.

*UPDATE* Ok, my code works. Let's see what their soolution was.

## Given Solution
function constructNote(message, letters) {
  var frequency = {};
  var frequencyM = {};
 
  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[i]] || 1;
  }
 
  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }
 
  for (let k in frequencyM) {
    if (!frequency[k]) return false;
    if (frequencyM[k] > frequency[k]) return false;
  }
 
  return true;
}

## Thoughts after Solution
Very similar code. It took a while but i got there.
