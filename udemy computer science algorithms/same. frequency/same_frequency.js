function sameFrequency(num1, num2){
    if (num1.length !== num2.length) {
        return false;
    }
    let num1Obj = num1.split("");
    let num2Obj = num2.split("");
    let count1 = {};
    let count2 = {};
    
    for (const digit1 in num1Obj) {
        if (count1[digit1]) {
            count1[digit1] +=1;
        }
        else {
            count1[digit1] = 1;
        }
        console.log(count1);
    }

    let max1 = Math.max(...count1.values(count1));

    for (const digit2 in num2Obj) {
        if (count2[digit2]) {
            count2[digit2] +=1;
        }
        else {
            count2[digit2] = 1;
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