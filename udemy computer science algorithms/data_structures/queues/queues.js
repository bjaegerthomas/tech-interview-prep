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
    enqueue(value){
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
    dequeue(){
        if(!this.first) return undefined;
        var currentLast = this.first;
        this.first = currentLast.next;
        this.size--;
        if(this.size === 0){
            this.first = null;
        }
        return currentLast;
    }
}