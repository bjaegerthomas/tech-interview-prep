# Quick Sort

## Task Overview
The next sorting algorithm we'll consider is Quick Sort. Unfortunately, quicksort is not the most intuitive of algorithms and has a wide range of implementations. It may help to check out this great video from Computerphile for a quick introduction to how quicksort works: https://www.youtube.com/watch?v=XE4VP_8Y0BU

The algorithm is as follows:

Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.

Next, compare every other element in the array to the pivot.

If it's less than the pivot value, move it to the left of the pivot.

If it's greater, move it to the right.

Once you have finished comparing, the pivot will be in the right place.

Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.

It's easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

## Possible Logic
This is a bit more complicated and so I am merely watching his explanation of it and and the code break down rather than attempt it on my own before seeing the final solution.

*UPDATE* I tried working on the solution for the helper function "pivot" but the starter code for the exercise included a comparotor variable which he doesn't actually use in his given solution.

## Given Solution

## Thoughts after Solution

