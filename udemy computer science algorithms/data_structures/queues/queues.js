class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return size;
    }
    pop(){
        if(!this.first) return undefined;
        var current = this.first;
        var newLast = current;
        while(current.next){
            newLast = current;
            current = current.next;
        }
        this.last = newLast;
        this.last.next = null;
        this.size--;
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
        return current;
    }
}