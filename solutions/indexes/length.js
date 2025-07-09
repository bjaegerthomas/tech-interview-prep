/*  const word = "banana";
    const result = letterCount(word);
    console.log(result);
*/

function letterCount (word) {
    const letters = [word.split()];
    count = {};

    for (const letter of letters) {
        if (letters[letter]) {
            count[letter] += 1;
        }
        else {
            count[letter] = 1;
        }
    }
    return count;
}