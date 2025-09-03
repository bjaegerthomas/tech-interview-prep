// Create a function named palindrome which accepts an integer
function palindrome(x) {
    // initialize variable right for right side of integer to 0
    let right = 0;
        // for loop which runs through length of integer - 1 where i starts at x - 1 and decrements every pass
        for (let i = x.length - 1; i > x.length/2; i--) {
            // check if right and i !==
            // if true return false
            if (right !== x[i]) return false;
            right++;
        }
        // return true if the integer is a palindrome and exits the for loop
    return true;
}
    