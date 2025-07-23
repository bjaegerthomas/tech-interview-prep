function power(base, expo){
    for (let i = 0; i <= expo; i++) {
        return base * power();
    }
}