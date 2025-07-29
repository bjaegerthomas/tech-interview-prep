function isSubsequence(a, b) {
    const str1 = a.split("");
    const str2 = b.split("");
    let p1 = 0;
    let p2 = 0;

    while (p1 <= str1.length - 1) {
        if (p2 > str2.length - 1) {
            return false;
        }
        else if (str1[p1] === str2[p2]) {
            p1++;
            p2++;
        }
        else {
            p2++;
        }
    }
    return true;
}