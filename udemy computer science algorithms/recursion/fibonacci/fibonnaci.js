function fib(num){
    if (num === 0) return 0;
    return num + fib(num-1);
}