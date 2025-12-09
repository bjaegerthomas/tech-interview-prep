# Reverse Words in a String

## Task Overview
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.

# Approach

//define a function which accepts a string s: reverseWordStr (s)
    //define left counter: let left = 0
    //define right counter: let right = s.length - 1
    //define current left word: let lWord = ""
    //define current right word: let rWord = ""
    //define ending reversed string: let result = []
    //define word counter: wordCount = 0
    //loop through s string: while (left < right)
        //build left word: while (left < right && s[left] !== " ") lWord += s[left]
            //increment left: left++
        //build right word: while (left < right && s[right] !== " ") rWord += s[right]
            //decrement right: right--
        //reverse the right word since we are building it backwards: rWord.split("").reverse().join("")
        //swap the left and right words in the final result: result[wordCount] = rWord
        //swap other result: result[wordCount + 1] = lWord   

# Given Solution

var reverseWords = function(s) {
    let words = s.split(' ');
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
};

# Thoughts

This is a classic example of making sure you read the problem correctly. I thought we were doing a similar thing to the reversing vowels problem and switching the words with their counterpart on the other side of the string. Instead we are just reversing the entire string by words as opposed to by letter.