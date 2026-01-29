# Maximum Number of Vowels in a Given Length

## Task Overview

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length

# Approach
//define function which accepts two variables a string s and an integer k: function maximumVowels (s, k)
    //define a variable to count the current number of vowels: let currVowels = 0
    //define a variable to count the number of vowels: let maxVowels = 0
    //define a variable to establish a set of vowels for comparison: const vowels = new Set{["a","A","e","E","i","I","o","O","u","U"]}
    //loop through to establish first window of vowels: for (let i = 0; i < k; i++)
        //determine if current value at index i is a vowel: if (vowels.has(s[i]))
            //if this is true then increment current vowels count: currVowels++
        //update maxVowels: maxVowels = currVowels
    //now we need to loop through the remainder of the s array: for (let i = k; i < s.length; i++)
        //check if first element of sliding window which is leaving is a vowel and new element being added isn't a vowel: if (vowels.has(s[i-k]) && !vowels.has(s[i]))
            //if the condition above is true decrement the current vowels count: currVowels--
        //check if first element of sliding window which is leaving is not a vowel and new element being added is a vowel: else if (vowels.has(!s[i-k]) && vowels.has(s[i]))
            //if the condition above is true increment the curr vowels count:
                currVowels++
        //if both the element leaving or being added to the sliding window are or are not vowels, the count won't change but we need to determine which is greater of the two vowel counts: maxVowels = Math.max(maxVowels, currVowels)
    //return the maximum number of vowels in any given subaaray in the original arrays length: return maxVowels
    
# Given Solution

# Thoughts
