class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    pop(){
        if(!this.first) return undefined;
        var currentFirst = this.first;
        this.first = currentFirst.next;
        this.size--;
        if(this.size === 0){
            this.last = null;
        }
        return currentFirst;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }
        else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }
}
