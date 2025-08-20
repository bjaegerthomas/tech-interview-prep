# Stacks

An abstract data structure. 

It is a data collection which needs to abide by a LIFO principal of "Last In, First Out"

The last element added to the stack will be the first element removed from a stack.

Places they are used:

Managing function invocations
Undo/Redo functionality
Routing, like the history object in your browser, is treated like a stack

We can create a stack structure in javascript by using push and pop with an array.

We could also reverse the order of the array by using unshift and shift to the front of the array, still adhering to the LIFO principle. This is less efficient though because the array needs to be reindexed each time and the Big O notation of this is substantial with larger arrays.

# Big O Notation

Insertion O(1)
Removal O(1)