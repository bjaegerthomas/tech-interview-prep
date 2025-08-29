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
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        var current = this.root;
        var exists = false;
        if(this.root === null) return false;
        while(exists === false){
            if(value === current.value) exists = true;
            if(value < current.value){
                if(current.left === null){
                    break;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    break;
                } 
                current = current.right;
            }
        }
        return exists;
    }
}