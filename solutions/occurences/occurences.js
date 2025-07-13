 const word = "banana";
    const result = letterIndex(word);
    console.log(result);


function letterIndex (word) {

    const letters = word.split("");
    const indexCount = {};

    for (let i = 0; i < word.length; i++) {

        const letter = letters[i];

        if (letter in indexCount) {
            indexCount[letter].push(i);
        }
        else {
            indexCount[letter] = [i];
        }
    }

    return indexCount;
}