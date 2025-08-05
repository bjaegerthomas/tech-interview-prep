function sortedFrequency(arr, num){
        
    let firstNum = findFirst(arr, num)
    if (firstNum === -1) return 0;
    
    return arr.length - firstNum
    }
       
function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === num || arr[mid - 1] !== num) && arr[mid] === num) {
        return mid;
        } else if (arr[mid] !== num) {
        return findFirst(arr, num, mid + 1, high)
        }
        return findFirst(arr, num, low, mid - 1)
    }
    return -1;
}
