//define a function which accepts a string s: function reverseVowels (s)
function reverseVowels (s) {
    //reverse the entire string: let reverseStr = s.split("").reverse().join("")
    let reverseStr = s.split("").reverse().join("");
    //define vowels as a constant: const vowels = new Set ([ A, a, E, e, I, i, O, o, U, u])
    const vowels = new Set ([ A, a, E, e, I, i, O, o, U, u]);
    //define output variable: let reverseVow = ""
    let reverseVow = "";
    //loop through s string: for (let i = 0; i < s.length; i++)
    for (let i = 0; i < s.length; i++) {
        //check if current letter is a vowel: if (vowels.has(s[i]))
            //if true select it's reverse counterpart to replace it and add to output: reverseVow += reverseStr[i]
        if (vowels.has(s[i])) reverseVow += reverseStr[i];
        //if it is not a vowel: else
            //add current letter to the output: reverseVow += s[i]
        else reverseVow += s[i];
    }
    //return the output: return reverseVow
    return reverseVow;
}