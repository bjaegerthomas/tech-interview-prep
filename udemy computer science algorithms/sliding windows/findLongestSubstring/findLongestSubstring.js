function findLongestSubstring (str) {
    let start = 0;
    let end = 1;
    let maxLen = 0;
    
    while (start < str.length) {
        if (str[start] === str[end]) {
            start++;
            end++;
        }
        else {
            maxLen = (end + 1) - start;
            end++;
        }
    }
    return maxLen;
}