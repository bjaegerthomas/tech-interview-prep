function power(){
    
    let base = arguments[0];
    let expo = arguments[1];

    function helper(expo) {
        for (let i = 0; i <= expo; i++) {
            expo --;
            return base * helper();
        }
    }
}

console.log(power(2,2));