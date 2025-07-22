# Recursion

Recursion is a process(function) that calls itself.
You invoke the same function with a different input until you reach the base case.
You need two things,  a base case and different input.

# Call Stack
The call stack, determines the order within which functions are called.
When a function is invoked, it is placed at the top of the call stack.
when the function ends or keyword return is hit. The function is removed from the top of the stack.

# Base Case
The condition when the recursion ends.

# Factorial
Example -  4! (exclamation denotes factorial) This equals 4 * 3 * 2 * 1

Without recursion (iterative):

function factorial(num) {
    let total = 1;
    for (let i = 1; i > 1; i--){
        let total *= i;
    }
    return total;
}

With recursion:

function factorial(num) {
    if (num === 1) return 1;
    return factorial(num-1);
}

# Common Pitfalls
Base case is missing or incorrect. There is a failure to change the input or the logic is off for changing the input.