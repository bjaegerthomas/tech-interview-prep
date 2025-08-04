function findLongestSubstring (str) {
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let tempStr = [];
    // Edge case of an empty inputed substring
    if (str.length === 0) {
        return null;
    }
    
    while (start < str.length) {
        // first we need to add the current ending index of the sliding window to our temporary string
        tempStr.append(str[end]);
        // Next we make a new set out of the temp string
        let curStr = new Set (tempStr);
        // If there all unique values then we can move the ending index up one
        if (curStr.size === tempStr.length) {
            end++;
        }
        else {
            // If not we calibrate maxLen based on the current starting index value being subtracted from the current
            // ending index value + 1
            maxLen = (end + 1) - start;
            // We move the starting index up 1
            start++;
            // And reset the temp string to take on a clean slate
            tempStr = [];
        }
    }
    return maxLen;
}