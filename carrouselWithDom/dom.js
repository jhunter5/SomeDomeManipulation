document.querySelector('.carrousel__Items').addEventListener('click', function(event) {
    if (event.target.classList.contains('item')) {
        handleSelector(event);
    }
});

function handleSelector(event){
    let image = event.target.cloneNode(true);
    document.querySelector('.focus__Item').innerHTML = '';
    document.querySelector('.focus__Item').appendChild(image);
}

const images = [
    "https://images.unsplash.com/photo-1704319180538-f57994377412?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704189277402-35a0edf7f410?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704283135253-218a9d250302?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

class Node {
    constructor(image) {
        this.image = image;
        this.next = null;
        this.prev = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.observer = null
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
        presentation.push(this.observer.image);
        presentation.push(this.observer.next.image);
        presentation.push(this.observer.next.next.image);
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

const circularLinkedList = new CircularLinkedList();

images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('item');
    circularLinkedList.addImage(img);
})

createDisplay();

function createDisplay(){
    const imageContainer = document.querySelector('.carrousel__Items');
    const rightButton = document.createElement('button');
    const leftButton = document.createElement('button');
    leftButton.classList.add('arrow');
    leftButton.classList.add('left');
    leftButton.onclick = moveLeft;
    leftButton.innerHTML = '&#10094';
    imageContainer.appendChild(leftButton);

    circularLinkedList.getPresentationsNodes().map(image => { 
        imageContainer.appendChild(image);
    });

    rightButton.classList.add('arrow');
    rightButton.classList.add('right');
    rightButton.onclick = moveRight;
    rightButton.innerHTML = '&#10095';
    imageContainer.appendChild(rightButton);
}

function removeDisplay(){
    const imageContainer = document.querySelector('.carrousel__Items');
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');
    imageContainer.removeChild(rightButton);
    imageContainer.removeChild(leftButton);
    circularLinkedList.getPresentationsNodes().map(image => { 
        imageContainer.removeChild(image);
    });
}

function moveRight(){
    removeDisplay();
    circularLinkedList.moveRight();
    createDisplay();
}

function moveLeft(){
    removeDisplay();
    circularLinkedList.moveLeft();
    createDisplay();
}