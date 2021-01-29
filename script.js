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
        // set square class name
        square.className = 'square';
        // set square id to id counter
        square.id = idCounter;        
        
        // create paragraph element
        let p = document.createElement('p');       
        // the value of the square's id should display centered in the square               
        let squareText = document.createTextNode(idCounter);        
        p.appendChild(squareText);
        square.appendChild(p);
        // insert square within the body
        document.body.appendChild(square);  
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

         square.addEventListener('dbl-click', function () {
            
         });
    });  
    


})
