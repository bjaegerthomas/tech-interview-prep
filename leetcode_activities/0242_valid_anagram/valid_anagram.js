//define function that accepts two strings function validAnagram(s, t)
function validAnagram (s, t) {
    //sort s let sortedS = s.plit("").sort().join("")
    let sortedS = s.plit("").sort().join("");
    //sort t let sortedT = t.plit("").sort().join("")
    let sortedT = t.plit("").sort().join("");
    //compare the two sorted strings and return the result return sortedS === sortedT
    return sortedS === sortedT;
}