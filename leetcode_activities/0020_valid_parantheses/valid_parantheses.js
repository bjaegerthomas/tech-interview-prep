//define function isValid(s) which accepts a string
function isValid(s){
    //define const opp = { "(":")", "{":"}", "[":"]", ")":"(", "}":"{", "]":"["})}
    const opp = {
        "(":")",
        "{":"}",
        "[":"]",
        ")":"(",
        "}":"{",
        "]":"["
    }
    //define left = Math.floor(s.length/2)
    let left = Math.floor(s.length/2) - 1;
    //let right = left + 1
    let right = left + 1;
    //while (left >= 0 && right <= s.length)
    while (left >= 0 && right <= s.length) {
        //if (s[right] != opp[s[left]])
        // //return false
        if (s[right] != opp[s[left]]) return false;           
        //left--
        //right++
        left--;
        right++;
        }
    //return true
    return true;
}