 /* const phrase = "There once was a man from manhattan who never washed his hair";
    const result = wordLength(phrase);
    console.log(result);
*/


function wordLength(phrase) {
    const words = phrase.split(" ");
    const count = {};

    for (const word of words) {
        count[word] = word.length;
    }

    return count;
}