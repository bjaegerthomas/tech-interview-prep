/* //define function that accepts two strings function validAnagram(s, t)
function validAnagram (s, t) {
    //sort s let sortedS = s.plit("").sort().join("")
    let sortedS = s.split("").sort().join("");
    //sort t let sortedT = t.plit("").sort().join("")
    let sortedT = t.split("").sort().join("");
    //compare the two sorted strings and return the result return sortedS === sortedT
    return sortedS === sortedT;
} */

//define function that accepts two strings function validAnagram(s, t)
function validAnagram (s, t) {
    //check to see if strings have different lengths if (s.length != t.length) return false
    if (s.length != t.length) return false;
    //create an object for s let sObj = {}
    let sObj = {};
    //create an object for t let tObj = {}
    let tObj = {};
    //loop through both strings building objects for them both for (let i = 0; i < s.length; i++)
    for (let i = 0; i < s.length; i++) {
        //create characters for each i index for each object let sChar = s[i], let tChar = t[i]
        let sChar = s[i];
        let tChar = t[i];
        //check if key for s exists, if it does increment by 1 if not create it sObj[sChar] = (sObj[sChar] ?? 0) + 1
        sObj[sChar] = (sObj[sChar] ?? 0) + 1;
        //check if key for t exists, if it does increment by 1 if not create it tObj[tChar] = (tObj[tChar] ?? 0) + 1
        tObj[tChar] = (tObj[tChar] ?? 0) + 1;
    }
    //loop through each obj to see if the keys and values add up for (let key in sObj)
    for (let key in sObj) {
        //if they aren't return false if (sObj[key] != tObj[key]) return false
        if (sObj[key] != tObj[key]) return false;
    }
    //return true if it makes it through the second for loop return true
    return true;
}