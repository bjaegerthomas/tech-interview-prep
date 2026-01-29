//define a function which accepts two strings str1 and str2
function greatestCommonDivisor (str1, str2) {
    //define variable index as our counter: let index = str2.length - 1
    let index = str2.length - 1;
    //loop through str2 to determine the divisor and see if it is a substring of str1: while (index > -1)
    while (index > -1) {
        //see if str1 includes str2: if (str1.includes(str2))
            //if true, return str2: return str2
        if (str1.includes(str2)) return str2;
        //if not true: else
        else {
            //decrement index counter: index--
            index--;
            //update str2 removing the last value at index: str2 = str2.slice(0, index)
            str2 = str2.slice(0, index);
        }
    }
    //return the divisor which is str2: return str2
    return str2;
}