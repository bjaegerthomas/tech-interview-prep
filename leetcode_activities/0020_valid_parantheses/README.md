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

## Key Takeways

