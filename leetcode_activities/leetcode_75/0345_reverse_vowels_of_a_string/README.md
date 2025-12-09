# Reverse Vowels of a String

## Task Overview
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 
Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

# Approach

//define a function which accepts a string s: function reverseVowels (s)
    //reverse the entire string: let reverseStr = s.split("").reverse().join("")
    //define vowels as a constant: const vowels = new Set ([ A, a, E, e, I, i, O, o, U, u])
    //define output variable: let reverseVow = ""
    //loop through s string: for (let i = 0; i < s.length; i++)
        //check if current letter is a vowel: if (vowels.has(s[i]))
            //if true select it's reverse counterpart to replace it and add to output: reverseVow += reverseStr[i]
        //if it is not a vowel: else
            //add current letter to the output: reverseVow += s[i]
    //return the output: return reverseVow

# Given Solution

# Thoughts
