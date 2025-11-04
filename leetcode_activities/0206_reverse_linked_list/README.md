# Reverse Linked List

# Task Overview

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

# Approach
//define function which accepts an array with the head defined of a singly linked list: function Reverse(arr)
    //create a node class: class Node
        //create constructor: constructor(val)
            //define value: this.val = val
            //define next: this.next = null
    //create a singly linked list class: class SinglyLinkedList
        //create constructor: constructor()
            //define the head: this.head = null
            //define the tail: this.tail = null
            //define the length: this.length = arr.length
    //define current node: let node = this.head
    //make the head the tail: this.head = this.tail
    //define the tail: this.tail = node
    //define next: let next
    //define previou: let prev = null
    //loop through arr to define reversed list: for (let i = 0; i < this.length; i++)
        //define reverse next: next = node.next
        //define reverse node.next: node.next = prev
        //define previous: prev = node
        //define node: node = next
    //return the reversed linked list: return this


# Given Solution

# Thoughts
