//define a function which accepts two strings word1 and word2
function mergeStringsAlternately (word1, word2) {
    //determine which string is larger and store in variable: let largest = Math.max(word1.length, word2.length)
    let largest = Math.max(word1.length, word2.length);
    //define merged variable: let merged = ""
    let merged = "";
    //loop through each string: for (let i = 0; i < largest; i++)
    for (let i = 0; i < largest; i++) {
        //determine if value for word1 at index i exists: if (word1[i])
        if (word1[i]) {
            //determine if value for word2 at index i exists: if (word2[i])
            if (word2[i]) {
                //if both are true add them to merged: merged = merged + (word1[i] ?? "") + (word2[i] ?? "")
                merged = merged + (word1[i] ?? "") + (word2[i] ?? "");
            }
            //if only first is true: else merged = merged + (word1[i] ?? "")
            else {
                merged = merged + (word1[i] ?? "")
            }
        }
        //if word1 doesn't have anymore values then word2 must otherwise we would exit the loop so update the merged string: else merged = merged + (word2[1] ?? "")
        else {
            merged = merged + (word2[1] ?? "");
        }
    }
    //return the merged string: return merged
    return merged;
}