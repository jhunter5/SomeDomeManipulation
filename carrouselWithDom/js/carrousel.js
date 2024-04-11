import CircularLinkedList from './circularDoubleLinkedList.js';

export default class Carrousel {
    constructor(images, showedImages) {
        this.images = images;
        this.circularLinkedList = new CircularLinkedList(showedImages);
        this.init();
        console.log(this.circularLinkedList.getFocusedImage());
    }

    init() {
        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.classList.add('item');
            this.circularLinkedList.addImage(img);
        })

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
        
        this.createDisplay();
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
    
        this.circularLinkedList.getPresentationsNodes().map(image => { 
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
        this.circularLinkedList.getPresentationsNodes().map(image => { 
            imageContainer.removeChild(image);
        });
    }

    focusImage = () => {
        let image = this.circularLinkedList.getFocusedImage().cloneNode(true);
        document.querySelector('.focus__Item').innerHTML = '';
        document.querySelector('.focus__Item').appendChild(image);
    }

    moveRight = () => {
        this.removeDisplay();
        this.circularLinkedList.moveRight();
        this.createDisplay();
        this.focusImage();
    }

    moveLeft = () => {
        this.removeDisplay();
        this.circularLinkedList.moveLeft();
        this.createDisplay();
        console.log(this.circularLinkedList.getFocusedImage());
        focusImage();
    }
}