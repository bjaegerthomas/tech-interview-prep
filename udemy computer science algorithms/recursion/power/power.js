function power(){
    let base = arguments[0];
    let expo = arguments[1];
    for (let i = 0; i <= expo; i++) {
        return base * power();
    }
}