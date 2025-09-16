 //define function which accepts an array of strings
function longestCommonPrefix(strs){
    //instantiate variable currPre = ""
    let currPre = "";
    //instantiate variable longPre = ""
    let longPre = "";
    //instantiate var index = 0
    let index = 0;
    //loop through strs array as long as i < strs.length
    for (let i = 0; i < strs.length; i++) {
        //if ((strs[i])[index] == (strs[i+1])[index])
        if ((strs[i])[index] == (strs[i+1])[index]) {
            //then currPre = currPre.concat((strs[i])[i])
            currPre = currPre.concat((strs[i])[i]);
            //index++
            index++;
            }
        //if currPre/length >= longPre.length
        if (currPre.length >= longPre.length) longPre = currPre;
            //then longPre = currPre}
    }
    //return longPre
    return longPre;
}