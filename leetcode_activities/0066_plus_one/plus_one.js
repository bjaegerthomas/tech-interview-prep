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
        digits[i] = 0;
    }
    //if we made it all the way through the loop then everything there was a 9 so we need to add a 1 to the beginning digits.unshift(1)
    digits.unshift(1);
    //return digits
    return digits;
}