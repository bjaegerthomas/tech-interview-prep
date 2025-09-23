# Length of Last Word

## Task Overview

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

## Approach
//define function which accepts a string function lengthOfLastWord(s)
//define current word let currWord = ""
//define longest word let longWord = ""
//loop through entire string for (let i = 0; i < s.length; i++)
    //if (s[i] !== " ")
        //currWord = currWord.concat(s[i])
    //else
        //if (currWord.length >= longWord.length)
            //longWord = currWord
        //currWord = ""
// return longWord.length

*NOTE* And this is why it behooves you to read all of the instructions carefully and thoroughly before starting in. I thought I was solving for the longest substring in the original string but instead I am counting the number of non-" " characters in the last word of a string. Time to reconfigure

//define function which accepts a string function lengthOfLastWord(s)
//define count variable to count characters in last word of overall string let count = 0
//loop through string backwards for (let i = s.length; i > 0; i--)
    //check if current element is a space if (s[i] != " ")
        //increase count count++
    //else if (count > 0) return
//return count

## Given Solution
var lengthOfLastWord = function(s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;    
};

## Key Takeways
I'm not sure why the extra calculations are made here rather than just working backwards from the end of the string like I did.



