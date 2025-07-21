function sameFrequency(num1, num2){
    if (num1.length !== num2.length) {
        return false;
    }
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let count1 = {};
    let count2 = {};
    
    for (const digit in num1Str) {
        if (count1[digit]) {
            count1[digit] +=1;
        }
        else {
            count1[digit] = 1;
        }
        console.log(count1);
    }

    let max1 = Math.max(...count1.values(count1));

    for (const digit in num2Str) {
        if (count2[digit]) {
            count2[digit] +=1;
        }
        else {
            count2[digit] = 1;
        }
        console.log(count2);
    }

    let max2 = Math.max(...count2.values(count2));

    if (max1 == max2) {
        return true;
    }
    else {
        return false;
    }
    
}