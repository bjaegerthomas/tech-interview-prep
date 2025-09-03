// Create a function named palindrome which accepts an integer
function palindrome(x) {
    //create new variable for integer and convert to string
    let numString = x.toString();
    // initialize variable right for right side of integer to 0
    let right = 0;
        // for loop which runs through length of integer - 1 where i starts at x - 1 and decrements every pass as long as i
        // is > x.length/2
        for (let i = numString.length - 1; i > numString.length/2; i--) {
            // check if right and i !==
            // if true return false
            if (numString[right] !== numString[i]) return false;
            // increment right by 1
            right++;
        }
        // return true if the integer is a palindrome and exits the for loop
    return true;
}
    