import Node from './node.js';

export default class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addImage(image) {
        const newNode = new Node(image);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
            this.tail.prev = this.tail;
            this.length++;
        } else {
            newNode.prev = this.tail; 
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
            this.head.prev = this.tail; 
            this.length++;
        }
    }

    printList() {
        let current = this.head;
        let i = 0;
        while (i < this.length) {
            console.log(current);
            current = current.next;
            i++;
        }
    }
}