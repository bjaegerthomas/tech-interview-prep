function findAllDuplicates(arr) {
    let search = {};
    for (let num of arr) {
        search[num] = (search[num] || 0) +1;
    }
    let result = [];
    for (let i in search) {
        if (i > 1) {
            result.push(result[i]);
        }
    }
    return result;
  }