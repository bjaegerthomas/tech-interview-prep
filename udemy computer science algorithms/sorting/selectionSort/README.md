# Selection Sort

## Task Overview
Create a function which accepts an array and sorts those values from lowest to highest by comparing adjacent elements one at a time to find the current minimum value and once it loops through the array, swaps the inital index with the minimum value. Then the process repeats until the inputed array is sorted.

## Possible Logic
I want to create a swap function to make it easier for readability. I will place that inside the main function. I need a for loop to loop through the entire array and then iside that a nested for loop to compare the two adjacent numbers as it goes down the line and to store a temporary smallest number which will replace the current zero index element using the swap function once it makes it's way through the entire array. Evrytime through the window of comparison will become smaller as we lock in the next smallest element. Eventually we will return a sorted array.

*UPDATE* I suppose we're not really swapping so much as finding the smallest and updating that variable. Will rethink if I need a function or not.

*UPDATE* I didn't end up using a function but I did end up swapping.

## Given Solution
// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

## Thoughts after Solution
I did consult gpt on my logic and reconfigured a few things to ultimately come up with the same as the given solution. I need to keep in mind that I sometimes get confused when swapping. It results in me conflating indexes and elements at times which means I need to pay extra attention when implementing that logic.

