# String Compression

## Task Overview

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Note: The characters in the array beyond the returned length do not matter and should be ignored.

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

Constraints:

1 <= chars.length <= 2000
chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

# Approach

//define a function which accepts a string array chars: function stringCompression (chars)
    //define an empty array s: let s = []
    //define a counter: let count = 0
    //loop through the array chars: for (let i = 0; i < chars.length; i++)
        //check if count has accumulated: if (count == 0)
            //if count = 0 then add current char of chars to s array: s.push(chars[i])

# Given Solution

function compress(chars) {
  let read = 0; // Pointer to read characters
  let write = 0; // Pointer to write compressed characters

  while (read < chars.length) { 
    let char = chars[read]; //store the char were working on
    let count = 0;

    // Count repeating chars in this set
    while ( read < chars.length &&  //were not at the end
            chars[read] === char) { //there is a match
      read++;
      count++;
    }

    // Write the character
    chars[write++] = char;

    // If count > 1, write the count digits
    // we use digits to correctly inc our write pointer for multi digit nums
    if (count > 1) {
      const countStr = count.toString();
      for (let digit of countStr) {
        chars[write++] = digit;
      }
    }
  }

  // Sneakily trim to our new length by setting length directly
  chars.length = write;

  return write;
}

# Thoughts

I don't think i'm smart enough for this

