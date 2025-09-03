# Palindrome

## Task Overview
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

## Approach
// Create a function named palindrome which accepts an integer
    //create new variable for integer and convert to string
    // initialize variable right for right side of integer to 0
    // for loop which runs through length of integer - 1 where i starts at x - 1 and decrements every pass as long as i
    // is > x.length/2
        // check if right and i !==
        // if true return false
        // increment right by 1
    // return true if the integer is a palindrome and exits the for loop

## Given Solution

## Key Takeways
*UPDATE* After the first pass I noticed a couple of things. 1- I forgot to discuss the fact that the right variable also needs to increment by 1 each time and 2- my solution will return true each time because of the logic in my code.
I also need to convert the integer into a string so I can use the indicies to compare elements within the integer. In addition, I need to use right as an indicies marker where as right now I am using it as just a value.
*UPDATE* Need to take into account edge cases like a single digit as well as add >= to my for loop logic so i don't miss out on the middle digit
