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

    createButton(direction, arrow, action){
        const button = document.createElement('button');
        button.classList.add('arrow');
        button.classList.add(direction);
        button.onclick = action;
        button.innerHTML = arrow;
        return button;
    }

    createDiv(className){
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    createDisplay(){
        let containerCarousel = document.querySelector('.container__Carousel');
        let focusItem = this.createDiv('focus__Item');
        let carouselItems = this.createDiv('carousel__Items');
        containerCarousel.appendChild(focusItem);
        containerCarousel.appendChild(carouselItems);

        this.focusImage(this.observer.image);
        const rightButton = this.createButton('right', '&#10095', this.moveRight);
        const leftButton = this.createButton('left', '&#10094', this.moveLeft);
        
        carouselItems.appendChild(leftButton);
        
        this.getPresentationsNodes().map(image => { 
            carouselItems.appendChild(image);
        });
    
        carouselItems.appendChild(rightButton);
    }

    refreshCarouselItems(){
        let imagesCarrouselContainer = document.querySelector('.carousel__Items');
        imagesCarrouselContainer.innerHTML = '';
        let rightButton = this.createButton('right', '&#10095', this.moveRight);
        let leftButton = this.createButton('left', '&#10094', this.moveLeft);
        imagesCarrouselContainer.appendChild(leftButton);
        this.getPresentationsNodes().map(image => { 
            imagesCarrouselContainer.appendChild(image);
        });
        imagesCarrouselContainer.appendChild(rightButton);
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
        this.observer = this.observer.next;
        this.focusedImage = this.observer.next;
        this.refreshCarouselItems();
        this.focusImage(this.focusedImage.image);
    }

    moveLeft = () => {
        this.observer = this.observer.prev;
        this.focusedImage = this.observer.next;
        this.refreshCarouselItems();
        this.focusImage(this.focusedImage.image);
    }

    getObserver(){
        return this.observer.image;
    }

    getFocusedImage(){
        return this.focusedImage.image;
    }
}