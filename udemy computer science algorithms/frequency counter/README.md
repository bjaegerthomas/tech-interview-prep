# Homework 2 - Anagram Problem

## Task Overview
Given two strings, write a function which determines if the first string is an anagram of the second.

## Possible Logic
Break each entry into an object with the split method. Iterate with a for loop checking each object against the other and popping values out of both when there is a match. At the end check with an if statement if both objects are empty inwhich case, they are an anagram, else they are not.

## Thoughts after Solution
After seeing the solution provided, he was able to do two loops which weren't nested and which were essentially frequency counters for the first word which created an object and counted each time one of the letters showed up and then a second loop which compared the second string to the object and decremented the value by one when it found the same value in the second string.

function validAnagram (first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}