function sameFrequency(num1, num2){
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let count1 = {};
    let count2 = {};

    if (num1Str.length !== num2Str.length) {
        return false;
    }
    
    for (const digit of num1Str) {
        if (count1[digit]) {
            count1[digit] +=1;
        }
        else {
            count1[digit] = 1;
        }
        console.log(count1);
    }

    let max1 = Math.max(...Object.values(count1));

    for (const digit of num2Str) {
        if (count2[digit]) {
            count2[digit] +=1;
        }
        else {
            count2[digit] = 1;
        }
        console.log(count2);
    }

    let max2 = Math.max(...Object.values(count2));

    if (max1 == max2) {
        return true;
    }
    else {
        return false;
    }   
}

sameFrequency(2334, 2558);