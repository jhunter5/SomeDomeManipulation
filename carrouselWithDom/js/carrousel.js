import CircularLinkedList from './circularDoubleLinkedList.js';

export default class Carrousel {
    constructor(images) {
        this.images = images;
        this.circularLinkedList = new CircularLinkedList();
        this.init();
    }

    init() {
        document.querySelector('.carrousel__Items').addEventListener('click', function(event) {
            if (event.target.classList.contains('item')) {
                let image = event.target.cloneNode(true);
                document.querySelector('.focus__Item').innerHTML = '';
                document.querySelector('.focus__Item').appendChild(image);
            }
        });

        this.addImagesToLinkedList(this.images);
        this.observer = this.circularLinkedList.head;
        this.focusedImage = this.circularLinkedList.head;
        this.createDisplay();
    }

    addImagesToLinkedList(images){
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.classList.add('item');
            this.circularLinkedList.addImage(img);
        })
    }

    createDisplay(){
        const imageContainer = document.querySelector('.carrousel__Items');
        const rightButton = document.createElement('button');
        const leftButton = document.createElement('button');
        leftButton.classList.add('arrow');
        leftButton.classList.add('left');
        leftButton.onclick = this.moveLeft;
        leftButton.innerHTML = '&#10094';
        imageContainer.appendChild(leftButton);
    
        this.getPresentationsNodes().map(image => { 
            imageContainer.appendChild(image);
        });
    
        rightButton.classList.add('arrow');
        rightButton.classList.add('right');
        rightButton.onclick = this.moveRight;
        rightButton.innerHTML = '&#10095';
        imageContainer.appendChild(rightButton);
    }

    removeDisplay(){
        const imageContainer = document.querySelector('.carrousel__Items');
        const rightButton = document.querySelector('.right');
        const leftButton = document.querySelector('.left');
        imageContainer.removeChild(rightButton);
        imageContainer.removeChild(leftButton);
        this.getPresentationsNodes().map(image => { 
            imageContainer.removeChild(image);
        });
    }

    getPresentationsNodes(){
        let presentation = [];
        let currentNode = this.observer;
        for (let i = 0; i < 3; i++) {
            presentation.push(currentNode.image);
            currentNode = currentNode.next;
        }
        return presentation;
    }

    focusImage = () => {
        let image = this.getFocusedImage().cloneNode(true);
        document.querySelector('.focus__Item').innerHTML = '';
        document.querySelector('.focus__Item').appendChild(image);
    }

    moveRight = () => {
        this.removeDisplay();
        this.observer = this.observer.next;
        this.focusedImage = this.observer.next;
        this.createDisplay();
        this.focusImage();
    }

    moveLeft = () => {
        this.removeDisplay();
        this.observer = this.observer.prev;
        this.focusedImage = this.observer.next;
        this.createDisplay();
        focusImage();
    }

    getObserver(){
        return this.observer.image;
    }

    getFocusedImage(){
        return this.focusedImage.image;
    }
}