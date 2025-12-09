//define a function which accepts an array flowerbed and an integer n: function canPlaceFlowers (flowerbed, n)
function canPlaceFlowers (flowerbed, n) {
    //loop through flowerbed array: for (let i = 0; i < flowerbed.length; i++)
    for (let i = 0; i < flowerbed.length; i++) {
        //check to see if our flower counter n has been depleted, if it has, exit the loop and return true: if (n = 0) return true
        if (n = 0) return true;
        //check to see if current value at flowerbed[i] is a 0 and if the prev and next values are a 1: if (flowerbed[i] !== 1 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1)
        if (flowerbed[i] !== 1 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
            //if the above conditions are met, change the current value at index i to 1: flowerbed[i] = 1
            flowerbed[i] = 1;
            //also decrement the n variable by 1: n--
            n--;
        }
    }
    //if we exit the loop without depleting our flower counter n, then there wasn't enough space and we have to return false: return false
    return false;
}