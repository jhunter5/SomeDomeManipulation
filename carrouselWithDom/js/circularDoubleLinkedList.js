import Node from './node.js';

export default class CircularLinkedList {
    constructor(showedImages) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.observer = null
        this.showedImages = showedImages;
    }

    addImage(image) {
        const newNode = new Node(image);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.observer = newNode;
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
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(currentNode.image);
            currentNode = currentNode.next;
        }
    }

    getPresentationsNodes(){
        let presentation = [];
        let currentNode = this.observer;
        for (let i = 0; i < this.showedImages; i++) {
            presentation.push(currentNode.image);
            currentNode = currentNode.next;
        }
        return presentation;
    }

    moveRight(){
        this.observer = this.observer.next;
    }

    moveLeft(){
        this.observer = this.observer.prev;
    }

    getObserver(){
        return this.observer.image;
    }
}