function findLongestSubstring (str) {
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let tempStr = [];

    if (str.length === 0) {
        return null;
    }
    
    while (start < str.length) {
        tempStr.append(str[end]);
        let curStr = new Set (tempStr);
        if (curStr.size === tempStr.length) {
            end++;
        }
        else {
            maxLen = (end + 1) - start;
            start++;
            tempStr = [];
        }
    }
    return maxLen;
}