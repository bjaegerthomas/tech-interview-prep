# Bubble Sort

## Task Overview
Create a function which takes in an array of integers and sorts them in ascending order using the bubble sort methodology, returning the final sorted array.

## Possible Logic
Start looping with variable i from the end of the array to the beginning. Then start an inner loop with a variable j from the beginning to i - 1. If arr[j] is greater than arr[j+1] then swap those two values. Finally return the sorted array.

## Given Solution
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

## Thoughts after Solution
The code is pretty straight forward after seeing him talk it out in pseudo code ahead of time. I went ahead an created a function outside of the for loops to use to swap the indexes which he does inside the loop without creating the function first.

