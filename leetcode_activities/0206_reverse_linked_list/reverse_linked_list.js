//define function which accepts an array with the head defined of a singly linked list: function Reverse(arr)
function Reverse(arr) {
    //create a node class: class Node
    class Node {
        //create constructor: constructor(val)
        constructor(val) {
            //define value: this.val = val
            this.val = val;
            //define next: this.next = null
            this.next = null;
        }
    }
    //create a singly linked list class: class SinglyLinkedList
    class SinglyLinkedList {
        //create constructor: constructor()
        constructor() {
            //define the head: this.head = null
            this.head = null;
            //define the tail: this.tail = null
            this.tail = null;
            //define the length: this.length = arr.length
            this.length = arr.length;
        }
    }
    //define current node: let node = this.head
    let node = this.head;
    //make the head the tail: this.head = this.tail
    this.head = this.tail;
    //define the tail: this.tail = node
    this.tail = node;
    //define next: let next
    let next;
    //define previou: let prev = null
    let prev = null;
    //loop through arr to define reversed list: for (let i = 0; i < this.length; i++)
    for (let i = 0; i < this.length; i++) {
        //define reverse next: next = node.next
        next = node.next;
        //define reverse node.next: node.next = prev
        node.next = prev;
        //define previous: prev = node
        prev = node;
        //define node: node = next
        node = next;
    }
    //return the reversed linked list: return this
    return this;
}