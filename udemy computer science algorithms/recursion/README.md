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
Base case is missing or incorrect.
There is a failure to change the input or the logic is off for changing the input. 
Failure to return a value or returning the wrong value.
Exceeding the maximum call stack size.

# Helper Method
function collectOddValues(arr){             //Outer function is not recursive where as the inner function is recursive
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])     //We are always checking the first index
        }
        
        helper(helperInput.slice(1))        //Then we are removing the first value from the array so we can make the next value the first index
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])