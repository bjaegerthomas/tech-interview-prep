function findAllDuplicates(arr) {
    let search = {};
    for (let num of arr) {
        search[num] = (search[num] || 0) +1;
    }
    let result = [];
    for (let key in search) {
        if (search[key] > 1) {
            result.push(Number[key]);
        }
    }
    return result;
  }