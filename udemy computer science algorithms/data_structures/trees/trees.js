class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if (!root){
            this.root = newNode;
            return this;
        }
        else if (value < this.root && !this.left){
            this.left = newNode;
        }
        else if (value > this.rott && !this.right){
            this.right = newNode;
        }     
    }
}