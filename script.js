document.addEventListener('DOMContentLoaded', function () {
    // id counter
    let idCounter = 0;

    // use the DOM to to create and insert a button labeled 'Add Square' into the body
    let button = document.createElement('button');
    button.textContent = 'Add Square';
    
    // add an event listener so when the  button is clicked, a new div should be added to the page
    button.addEventListener('click', function () {
        // increment id counter by 1
        idCounter++;
        
        // create a div called square
        let square = document.createElement('div');
        // set square class name
        square.className = 'square';
        // set square id to id counter
        square.id = idCounter;

        // create paragraph element
        let p = document.createElement('p');
        // the value of the square's id should display centered in the square               
        p.textContent = idCounter;
               
        square.appendChild(p);
        // insert square within the body
       // set opacity of p to 0 so text isn't visible
        p.style.opacity = '0';

        // Add mouse enter event listener - when hovering over a square, the value of the square's id should display centered in the square
        square.addEventListener("mouseenter", function () {
            p.style.opacity = '1';
        });

        // Add mouse leave event listener - the value of the square's id should disappear when the cursor is no longer over the square
        square.addEventListener('mouseleave', function () {
            p.style.opacity = '0';
        });

        // When a square is clicked, it should change to a random background color 
        square.addEventListener('click', function () {
            // random hex color generator (i.e. ##FF0000 is red)
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                square.style.backgroundColor = color;
            }
        });

        // add event listener to square if double clicked
        square.addEventListener('dblclick', function () {
            // if the id of the square is even: The square after the clicked square should be removed from the page
            if (square.id % 2 === 0) {
                if (this.nextSibling) {
                    squareContainer.removeChild(square.nextSibling);
                }
                // If there isn't a square after the clicked square, display an alert indicating so
                else {
                    alert('There are no squares to the right to remove.')
                }

            // if the id of the square is odd: the square before the clicked square should be removed from the page
            } else {
                if(square.previousSibling) {
                        squareContainer.removeChild(square.previousSibling);
                  
                }
                // if there isn't a square before the clicked square, display an alert indicating so
                else {
                    alert('There are no squares to the left to remove.');
                }
            }
        });

        squareContainer.appendChild(square);
    });

    document.body.appendChild(button);
    
    let squareContainer = document.createElement('div');
    squareContainer.id = 'square-container'; 
    document.body.appendChild(squareContainer);  
    
});
