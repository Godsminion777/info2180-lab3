document.addEventListener('DOMContentLoaded', function() {
    // Select all the div elements that represent squares on the board
    const squares = document.querySelectorAll('#board div');

    // Game State Variables
    let currentPlayer = 'X'; // 'X' always goes first
    let gameState = ["", "", "", "", "", "", "", "", ""]; // Array thattracks played squares

    // Iterate over each square on the board to set it up
    squares.forEach((square, index) => {
        // Adds the square class to each div and styles it
        square.classList.add('square');

        // This adds a click event listener to each square.
        square.addEventListener('click', () => {
            // First, check if the square has already been played or if the game is over.
            // If it's not empty, we do nothing.
            if (gameState[index] === "") {
                // Update the square visually for the current player
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer; // Update our internal game state array to record the move

                // Alternate the player for the next turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        // Adds hover class when the mouse enters a squre
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        // Removes hover class when the mouse leaves the square
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });
});
