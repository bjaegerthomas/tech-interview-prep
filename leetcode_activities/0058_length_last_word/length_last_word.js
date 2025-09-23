//define function which accepts a string function lengthOfLastWord(s)
function lengthOfLastWord(s) {
    //define current word let currWord = ""
    let currWord = "";
    //define longest word let longWord = ""
    let longWord = "";
    //loop through entire string for (let i = 0; i < s.length; i++)
    for (let i = 0; i < s.length; i++) {
        //if (s[i] !== " ")
            //currWord = currWord.concat(s[i])
        if (s[i] !== " ") currWord = currWord.concat(s[i]);
        //else
        else {
            //if (currWord.length >= longWord.length)
                //longWord = currWord
            if (currWord.length >= longWord.length) longWord = currWord;
            //currWord = ""
            currWord = ""
            }
    // return longWord.length
    }
}