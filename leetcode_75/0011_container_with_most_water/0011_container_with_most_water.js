//define function which accepts an array of integers, height: function containerWithMostWater (height)
function containerWithMostWater (height) {
    //define left pointer: let lp = 0
    let lp = 0;
    //define right pointer: let rp = height.length - 1
    let rp = height.length - 1;
    //define maximum area: let maxA = 0
    let maxA = 0;
    //define current area: let currA = 0
    let currA = 0;
    //loop through array: while (left < right)
    while (lp < rp) {
        //determine width of current container: let width = Math.abs(lp - rp)
        let w = rp - lp;
        //determin the height of the current container: let height = Math.min(lp, rp)
        let h = Math.min(height[lp], height[rp]);
        //determine current area: currA = width * height
        currA = w * h;
        //check which area is larger: maxA = Math.max(maxA, currA)
        maxA = Math.max(maxA, currA);
        //check which height is bigger so you can increment or decrment pointers accordingly: if (lp > rp)
            //if this is true we keep the lp pointer the same and decrement rp: rp--
        if (height[lp] > height[rp]) rp--;
        //otherwise we increment lp: else lp++
        else lp++;
    }
    //return the maximum area: return maxA
    return maxA;
}