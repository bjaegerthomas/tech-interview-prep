 /* const numbers = [1, 4, 6, 9, 7, 9, 5, 2, 8, 10, 13, 22, 17, 20, 23, 15, 18];
    const result = oddEvenSum(numbers);
    console.log(result);
*/

function oddEvenSum(numbers) {
    let evenTotal = 0;
    let oddTotal = 0;
    for (const num of numbers) {
        if (num % 2 == 0) {
            evenTotal += num;
        }
        else {
            oddTotal += num;
        }
    }
    const finalTotals = {"Even": evenTotal, "Odd": oddTotal};
    return finalTotals;
}