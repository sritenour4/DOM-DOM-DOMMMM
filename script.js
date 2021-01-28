document.addEventListener('DOMContentLoaded', function () {
    // id counter
    let idCounter = 0;

    // use the DOM to to create and insert a button labeled 'Add Square' into the body
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    // add an event listener so when the  button is clicked, a new div should be added to the page
    button.addEventListener('click', function () {
        // increment id counter by 1
        idCounter++;
        // create a div called square
        let square = document.createElement('div');
        // set square class name to square
        square.className = 'square';
        // set square id to id counter
        square.id = idCounter;        
        // insert div within the body
        document.body.appendChild(square);
    });

    // Math.floor(Math.random() * 256)
})
