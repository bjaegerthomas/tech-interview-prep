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

ChatGPT fix of my logic and syntax mistakes:

function reverseVowels(s) {
    const vowels = new Set(["A","a","E","e","I","i","O","o","U","u"]);
    
    // Step 1: collect vowels
    let vowelList = [];
    for (let char of s) {
        if (vowels.has(char)) {
            vowelList.push(char);
        }
    }
    
    // Step 2: reverse the vowel list
    vowelList.reverse();
    
    // Step 3: rebuild string, replacing vowels from reversed list
    let result = "";
    let index = 0;  // pointer for reversed vowels
    
    for (let char of s) {
        if (vowels.has(char)) {
            result += vowelList[index];
            index++;
        } else {
            result += char;
        }
    }
    
    return result;
}

Here's the optimized Two Pointer approach that GPT then gave me:

function reverseVowels(s) {
    const vowels = new Set(["A","E","I","O","U","a","e","i","o","u"]);
    const chars = s.split("");            // turn string into array so we can swap
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        // move left pointer forward until it hits a vowel
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }

        // move right pointer backward until it hits a vowel
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }

        // now both chars[left] and chars[right] are vowels → swap them
        [chars[left], chars[right]] = [chars[right], chars[left]];

        left++;
        right--;
    }

    return chars.join("");
}

And the version given by a user in Leetcode:

function reverseVowels(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
}

# Thoughts

I get my mistakes now and I see the solution clearly.
