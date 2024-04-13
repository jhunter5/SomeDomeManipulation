import CircularLinkedList from './circularDoubleLinkedList.js';
import API_KEY from '../secret.js'

export default class Carrousel {
    constructor(subject) {
        this.subject = subject;
        this.images = null;
        this.circularLinkedList = new CircularLinkedList();
        this.init();
    }

    async init() {
        document.querySelector('.carrousel__Items').addEventListener('click', (event) =>{
            if (event.target.classList.contains('item')) {
                this.focusImage(event.target);
            }
        });

        this.images = await this.fetchImages();
        this.addImagesToLinkedList(this.images);
        this.observer = this.circularLinkedList.head;
        this.focusedImage = this.circularLinkedList.head;
        this.createDisplay();
    }

    async fetchImages() {
        return new Promise((resolve, reject) => {
            fetch('https://api.pexels.com/v1/search?query=' + this.subject + '&per_page=10', {
                headers: {
                    'Authorization': API_KEY
                }
            })
            .then(response => response.json())
            .then(data => {
                let images = data.photos.map(photo => photo.src.large);
                resolve(images); 
            })
            .catch(error => {
                reject(error); 
            });
        });
    }

    addImagesToLinkedList(images){
        images.forEach(image => {
            let img = this.createImageElement(image);
            this.circularLinkedList.addImage(img);
        })
    }

    createImageElement(image) {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('item');
        return img;
    }

    createDisplay(){
        this.focusImage(this.focusedImage.image);
        const imagesCarrouselContainer = document.querySelector('.carrousel__Items');
        const rightButton = document.createElement('button');
        const leftButton = document.createElement('button');
        leftButton.classList.add('arrow');
        leftButton.classList.add('left');
        leftButton.onclick = this.moveLeft;
        leftButton.innerHTML = '&#10094';
        imagesCarrouselContainer.appendChild(leftButton);
    
        this.getPresentationsNodes().map(image => { 
            imagesCarrouselContainer.appendChild(image);
        });
    
        rightButton.classList.add('arrow');
        rightButton.classList.add('right');
        rightButton.onclick = this.moveRight;
        rightButton.innerHTML = '&#10095';
        imagesCarrouselContainer.appendChild(rightButton);
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

    refreshDisplay(){
        this.removeDisplay();
        this.createDisplay();
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

    focusImage = (image) => {
        image = image.cloneNode(true);
        document.querySelector('.focus__Item').innerHTML = '';
        document.querySelector('.focus__Item').appendChild(image);
    }

    moveRight = () => {
        this.removeDisplay();
        this.observer = this.observer.next;
        this.focusedImage = this.observer.next;
        this.createDisplay();
        this.focusImage(this.focusedImage.image);
    }

    moveLeft = () => {
        this.removeDisplay();
        this.observer = this.observer.prev;
        this.focusedImage = this.observer.next;
        this.createDisplay();
        this.focusImage(this.focusedImage.image);
    }

    getObserver(){
        return this.observer.image;
    }

    getFocusedImage(){
        return this.focusedImage.image;
    }
}