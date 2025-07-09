 /* const arr = [1,4,5,2,6,8,2,4,8,5,7,9,1,0,0,0];
    const result = freqCount(arr);
    console.log(result);
*/


function freqCount(arr) {
    count = {};

    for (const num of arr) {
        if (count[num]) {
            count[num] += 1;
        }
        else {
            count[num] = 1;
        }
    }
    return count;
}