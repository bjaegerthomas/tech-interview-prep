# Valid Anagram

## Task Overview

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

## Approach

1st attempt:

//define function that accepts two strings function validAnagram(s, t)
    //sort s let sortedS = s.plit("").sort().join("")
    //sort t let sortedT = t.plit("").sort().join("")
    //compare the two sorted strings and return the result return sortedS === sortedT

2nd Attempt:

//define function that accepts two strings function validAnagram(s, t)
    //check to see if strings have different lengths if (s.length != t.length) return false
    //create an object for s let sObj = {}
    //create an object for t let tObj = {}
    //loop through both strings building objects for them both for (let i = 0; i < s.length; i++)
        //create characters for each i index for each object let sChar = s[i], let tChar = t[i]
        //check if key for s exists, if it does increment by 1 if not create it sObj[sChar] = (sObj[sChar] ?? 0) + 1
        //check if key for t exists, if it does increment by 1 if not create it tObj[tChar] = (tObj[tChar] ?? 0) + 1
    //loop through each obj to see if the keys and values add up for (let key in sObj)
        //if they aren't return false if (sObj[key] != tObj[key]) return false
    //return true if it makes it through the second for loop return true

## Given Solution

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;    
};

## Key Takeways
I thought about using this hashmap approach, and it's cleaner than mine because he essentially only creates one hashmap for s and then compares it to the characters in t. If they don't exist or if counter for that specific charcter in the s hashmap has reached 0, then you return false otherwise you keep subtracting one from the counter for that specfic character after it is found in the t string.

