// redone using class

const container = document.createElement('main');
container.className = 'container';
document.body.appendChild(container);

const generateBtn = document.getElementById('generate-btn');

let counter = 1;

// Create a class named Die that represents a single die.
class Square {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.rendor();
        this.addEvents();
    }

    addEvents () {
        this.div.addEventListener('mouseover', () => this.div.appendChild(this.value));
        this.div.addEventListener('mouseout', () => this.div.removeChild(this.value));
        this.div.addEventListener('click', () => this.div.style.backgroundColor = this.randomColor());
        this.div.addEventListener('dblclick', () => this.destroySomething());
    }

    destroySomething() {
        if (this.div.id % 2 === 0) {
            if (this.div.nextSibling === null) {
                console.log('no square')
            } else {
                container.removeChild(this.div.nextSibling)
            }
        } else {
            if (this.div.previousSibling === null) {
                console.log('no square')
            } else {
                container.removeChild(this.div.previousSibling);
            }
        }
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    rendor() {
        this.div.className = 'square';
        this.div.id = counter;
        container.appendChild(this.div);
    }
    
}

generateBtn.addEventListener('click', function () {
    new Square();
    counter++;
})


