// create a function which accepts a string "s" and converts it from a roman numeral into an integer
function romanToInt(s) {
    // initialize a var num = []
    var num = "";
    // initialize a var current = 0
    var current = "";
    // move through a for loop as long as i < s.length - 1
    for (let i = 0; i <s.length - 1; i++){
        // check if s[i] in string  === C
        if (s[i] === "C") {
            // check to see if the next element s[i+1] === D
            if (s[i] === "D") {
                // set current = 4
                current = "4";
                // increment i by 1 since we can skip the next variable as we know it is a D
                i++;
            // else if the next element === M
            } else if (s[i+1] === "M") {
                // set current = 9
                current = "9";
                // increment i by 1 since we can skip the next variable as we know it is a M
                i++;
            } else {
            // else set current = 1
            current = "1";
            }
        }
        // check if s[i] === X
        if (s[i] === "X") {
            // check if the next element s[i+1] === L
            if (s[i+1] === "L") {
                // set current = 4
                current = "4";
                // increment i by 1 since we can skip the next variable as we know it is a L
                i++;
            // else if s[i+1] === C
            } else if (s[i+1] === "C") {
                // set current = 9
                current = "9";
                // increment i by 1 since we can skip the next variable as we know it is a C
                i++;
            // else set current = 1
            } else {
                current = "1";
            }
        }
        // check if s[i] === I
        if (s[i] === "I") {
            // check if the next element s[i+1] === V
            if (s[i+1] === "V") {
                // set current = 4
                current = "4";
                // increment i by 1 since we can skip the next variable as we know it is a V
                i++;
            // else check if s[i+1] === X
            } else if (s[i+1] === "X") {
                // set current = 9
                current = "9";
                // increment i by 1 since we can skip the next variable as we know it is a X
                i++;
            // else set current = 1
            } else {
                current = "1";
            }
        }
        // check if s[i] === V
            // set current = 5
        if (s[i] === "V") current = "5";
        // check if s[i] === L
            // set current = 5
        if (s[i] === "L") current = "5";
        // check if s[i] === D
            // set current = 5
        if (s[i] === "D") current = "5";
        // check if s[i] === M
            // set current = 1
        if (s[i] === "M") current = "1";
        // num.push(current)
        num = num.concat(current);
    }
    // return num
    return num;
};