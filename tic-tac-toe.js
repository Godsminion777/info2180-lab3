document.addEventListener('DOMContentLoaded', function() {
    // Select all the div elements within the element with id 'board'
    const squares = document.getElementById('board').getElementsByTagName('div');

    // Loop through each of the square divs
    for (let i = 0; i < squares.length; i++) {
        // Add the 'square' class to each div
        squares[i].classList.add('square');
    }
});
