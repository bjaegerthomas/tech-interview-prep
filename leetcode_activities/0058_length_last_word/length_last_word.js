//This was my first attempt when I thought I was solving for the length of the longest word within the orignal string

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

//This is my second attempt using the correct parameters and guidleines

//define function which accepts a string function lengthOfLastWord(s)
function lengthOfLastWord(s) {
    //define count variable to count characters in last word of overall string let count = 0
    let count = 0;
    //loop through string backwards for (let i = s.length; i > 0; i--)
    for (let i = s.length; i > 0; i--) {
        //check if current element is a space if (s[i] != " ")
            //increase count count++
        if (s[i] != " ") count++;
        //else if (count > 0) return
        else if (count > 0) return count;
    }
}