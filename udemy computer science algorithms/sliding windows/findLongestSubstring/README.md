# Find Longest Substring

## Task Overview
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

## Possible Logic
First I'm going to initialize a variable start with a value of zero and a variable end wioth a value of one, signaling the beginning and ending index of the sliding window. I'm also going to initialize a variable named maxLen to hold the largest length of the substring with unique characters and set it to zero. Then create an overall while loop with a similar condition to the minSubarrayLen problem checking that the beginning index of the string is less than the overall length of the string. First I want to create a condition to check if inputed string at index start and inputed string at index end are equal if they are add on to start and one to end. Else if they aren't add let maxLen equal end plus one minus start and add one to end. Once the loop has completed return maxLen.

*UPDATE* Realizing my current solution only tests to see if two characters side by side are distinct, not all the characters in a substring. Need to reconfigure possibly making a set.

*UPDATE* Ok so after thinking about it a little I updated the js file with an edge case of an empty inputed string. In addition I created a tempStr and curStr for use in using a set to check for unique characters in ehlping to determine the longest substring.

*UPDATE* Here is the fix, that gpt gave to my current version of the solution:

function findLongestSubstring(str) {
  let seen = new Set();
  let start = 0;
  let end = 0;
  let maxLen = 0;

  while (end < str.length) {
    if (!seen.has(str[end])) {
      // No duplicate — expand the window
      seen.add(str[end]);
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
    } else {
      // Duplicate found — shrink the window from the left
      seen.delete(str[start]);
      start++;
    }
  }

  return maxLen;
}

It would appear that I was on the right track with using set to evaluate unique characters, just not the right implementation. I'm also noting that often times streamlined coditional statements for these solutions often times implement the not operator.

## Given Solution

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

## Thoughts after Solution

When asking gpt to explain this line by line I got a better sense of this approach but am still fuzzy on it and also with the input of "abcabcbb" it says it will return 4 as the longest, except that isn't correct so I'm not sure if the given solution works.

*UPDATE* the solution works when I tested this same input in a snippet, which it gave the longest as being 3.



