function power(){
    
    let base = arguments[0];
    let expo = arguments[1];

    function helper() {
        if (expo === 0) return 1;
        for (let i = 0; i <= expo; i++) {
            return base * helper(expo - 1);
        }
    }
    return helper(expo);
}

console.log(power(2,2));