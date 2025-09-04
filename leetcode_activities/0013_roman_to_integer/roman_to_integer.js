// create a function which accepts a string "s" and converts it from a roman numeral into an integer
function romanToInt(s) {
    // initialize a var num = 0
    let num = 0;
    // initialize a var current = 0
    let current = 0;
    // move through a for loop as long as i < s.length
    for (let i = 0; i <= s.length; i++) {
        // check if s[i] in string  === "C"
        if (s[i] === "C") {
            // check to see if the next element s[i+1] === "D"
            if (s[i+1] === "D") {
                // set current = 400
                current = 400;
                // increment i by 1 since we can skip the next variable as we know it is a D
                i++;
            }
            // else if the next element === "M"
            else if (s[i+1] === "M") {
                // set current = 900
                current = 900;
                // increment i by 1 since we can skip the next variable as we know it is a M
                i++;
            }
            // else set current = 100
            else current = 100;
        }
        // check if s[i] === "X"
        if (s[i] === "X") {
            // check if the next element s[i+1] === "L"
            if (s[i+1] === "L") {
                // set current = 40
                current = 40;
                // increment i by 1 since we can skip the next variable as we know it is a L
                i++;
            }
            // else if s[i+1] === "C"
            else if (s[i+1] === "C") {
                // set current = 90
                current = 90;
                // increment i by 1 since we can skip the next variable as we know it is a C
                i++;
            }
            // else set current = 10
            else current = 10;
        }
        // check if s[i] === "I"
        if (s[i] === "I") {
            // check if the next element s[i+1] === "I"
            if (s[i+1] === "I") {
                // check if s[i+1] === "I"
                if (s[i+1] === "I") {
                    // set current = 3
                    current = 3;
                    // increment forward by two since we know the next two numerals are both I
                    i = i + 2;
                }
                // set current = 2
                current = 2;
                // increment by one since we know the next numeral is an I
                i++;
            }
            // else check if s[i+1] === "V"
            else if (s[i+1] === "V") {
                // set current = 4
                current = 4;
                // increment i by 1 since we can skip the next variable as we know it is a V
                i++;
            }
            // else check if s[i+1] === "X"
            else if (s[i+1] === "X") {
                // set current = 9
                current = 9;
                // increment i by 1 since we can skip the next variable as we know it is a X
                i++;
            }
            // else set current = 1
            else current = 1;
        }
        // check if s[i] === "V"
            // set current = 5
        if (s[i] === "V") current = 5;
        // check if s[i] === "L"
            // set current = 50
        if (s[i] === "L") current = 50;
        // check if s[i] === "D"
            // set current = 500
        if (s[i] === "D") current = 500;
        // check if s[i] === "M"
            // set current = 1000
        if (s[i] === "M") current = 1000;
        // num = num + current
        num += current;
    }    
    // return num
    return num;
}
    