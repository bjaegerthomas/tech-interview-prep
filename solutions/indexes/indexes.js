 /* const word = "banana";
    const result = letterCount(word);
    console.log(result);
*/


function letterCount (word) {
    const letters = word.split("");
    const count = {};

    for (const letter of letters) {
        if (count[letter]) {
            count[letter] += 1;
        }
        else {
            count[letter] = 1;
        }
    }
    return count;
}