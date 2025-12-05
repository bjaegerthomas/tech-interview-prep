# Merge Strings Alternately

## Task Overview

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

# Approach

BRUTE FORCE

//define a function which accepts two strings word1 and word2
    //determine which string is larger and store in variable: let largest = Math.max(word1.length, word2.length)
    //define merged variable: let merged = ""
    //loop through each string: for (let i = 0; i < largest; i++)
        //determine if value for word1 at index i exists: if (word1[i])
            //determine if value for word2 at index i exists: if (word2[i])
                //if both are true add them to merged: merged = merged + (word1[i] ?? "") + (word2[i] ?? "")
            //if only first is true: else merged = merged + (word1[i] ?? "")
        //if word1 doesn't have anymore values then word2 must otherwise we would exit the loop so update the merged string: else merged = merged + (word2[1] ?? "")
    //return the merged string: return merged


# Given Solution

var mergeAlternately = function(word1, word2) {
    let merged = [];

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) {
            merged.push(word1[i]);
        }
        
        if (i < word2.length) {
            merged.push(word2[i]);
        }
    }

    return merged.join("");    
};

# Thoughts

I was trying to avoid using an array but i totally understand and could have come up with the given solution. It makes sense and is cleaner than my nested conditional statements which also broke during implementation