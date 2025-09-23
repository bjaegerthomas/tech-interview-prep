//create function which takes in an array of integers function plusOne(digits)
function plusOne(digits) {
    //for (let i = digits.length - 1; i >= 0; i--)
    for (let i = digits.length - 1; i >= 0; i--) {
        //if (digits[i] != 9)
        if (digits[i] != 9) {
            //digits[i] = digits[i] + 1;
            digits[i] = digits[i] + 1;
            //return digits
            return digits;
        }
        //else digits[i] = 0
        else digits[i] = 0;
    //return digits
    return digits;
    }
}