function sameFrequency(num1, num2){
    if (num1.length !== num2.length) {
        return false;
    }
    let num1 = num1.split("");
    let num2 = num2.split("");
    let count1 = {};
    let count2 = {};
    
    for (const digit1 in num1) {
        if (count1[digit1]) {
            count1[digit1] +=1;
        }
        else {
            count1[digit1] = 1;
        }
    }

    for (const digit2 in num2) {
        if (count2[digit2]) {
            count2[digit2] +=1;
        }
        else {
            count2[digit2] = 1;
        }
    }

    
}