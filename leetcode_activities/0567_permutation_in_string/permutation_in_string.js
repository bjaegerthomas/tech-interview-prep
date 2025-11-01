//define function which accepts two strings: function permInString(s1, s2)
function permInString(s1, s2) {
    //define hash map for s1: let map = new Map()
    let map = new Map();
    //define counter for characters to account for in s1: let chars = s1.length
    let chars = s1.length;
    //loop through s1 and populate hash map: for (const letter of s1)
    for (const letter of s1) {
        // fill in hahs map for s!: map.set(letter, (map.get(letter) || 0) + 1);
        map.set(letter, (map.get(letter) || 0) + 1);
    }
    //loop through s2 and compare values: for (let i = 0; i < s2.length; i++)
    for (let i = 0; i < s2.length; i++) {
        //check if all letters have been found in s1 inside of s2: if (chars === 0) return true
        if (chars === 0) return true;
        //define current character: const char = s2[i]
        const char = s2[i];
        //compare current character to hash map: if (map.has[char] && map.get[char] > 0)
            //decrement chars: chars--
        if (map.has[char] && map.get[char] > 0) chars--;
        //reduce duplicates or eliminate count in hash map: map.set(char, (map.get(char) || 0) - 1)
        map.set(char, (map.get(char) || 0) - 1);
    }
    //if we don't find all of the letters in s1 inside s2 return false: return false
    return false;
}