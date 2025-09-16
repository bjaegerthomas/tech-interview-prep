# Valid Parantheses

## Task Overview

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

## Approach
//define function isValid(s) which accepts a string
    //define const opp = { "(":")", "{":"}", "[":"]", ")":"(", "}":"{", "]":"["})}
    //define left = Math.floor(s.length/2)
    //let right = left + 1
    //while (left >= 0 && right <= s.length)
        //if (s[right] != opp[s[left]])
            //return false
        //left--
        //right++
    //return true

## Given Solution

Solution 1 given by chat gpt:

// Define a function that accepts a string of brackets
function isValid(s) {
    // Map of opening to closing brackets
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    // Stack to keep track of opening brackets
    const stack = [];

    // Loop through each character
    for (let char of s) {
        // If it's an opening bracket, push to stack
        if (pairs[char]) {
            stack.push(char);
        } 
        // If it's a closing bracket
        else {
            // Pop from stack
            const last = stack.pop();
            // Check if it matches
            if (pairs[last] !== char) {
                return false;
            }
        }
    }

    // At the end, stack must be empty
    return stack.length === 0;
}

## Key Takeways
*UPDATE* I have run it and it failed most test cases. Seems I'm having issues with my indexing. When I subtract 1 from the intial instantiation of the left integer I passed 4 of the 5 test cases except for the second one. I think the appraoch is solid, just coming up against the indexing issue.

*UPDATE* My solution was only taking into account a symetrical string as opposed to properly open and closed sets of brackets or parantheses. The use of the stack aloows us to keep track of all of the opening brackets which haven't been satisfied yet by finding their corresponding closing bracket.

