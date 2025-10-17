document.addEventListener('DOMContentLoaded', function() {
    // Select all necessary elements 
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn'); // Select the New Game button

    // Game State Variables
    let currentPlayer = 'X'; // 'X' always goes first
    let gameState = ["", "", "", "", "", "", "", "", ""]; // Array to track played squares
    let gameActive = true; // Track if the game is still in play

     // All possible winning combinations on the 3x3 grid
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Check for a winner
    function checkWinner() {
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i]; // Break down the combination into three indices
            // Check if the gameState has the same player symbol in these three positions
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                gameActive = false;
                const winner = gameState[a];
                // Update the status message
                statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                statusDiv.classList.add('you-won');
                return;
            }
        }
    }

    function resetGame() {
        // Reset all game state variables to their initial values
        currentPlayer = 'X';
        gameState = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;

        // Reset the status message and remove the winner styling
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove('you-won');

        // Clear the board visually
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
    }

    // Add click event listener to the New Game button
    newGameButton.addEventListener('click', resetGame);

    // Set up each square on the board
    squares.forEach((square, index) => {
        square.classList.add('square');

        //Add a click event listerner to each square 
        square.addEventListener('click', () => {
            // The move is only valid if the square is empty and the game is active
            if (gameState[index] === "" && gameActive) {
                // Update the square visually and the internal game state
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;

                // Check for winner after the move has been made
                checkWinner();

                // If game is still active after winner check, switch players
                if (gameActive) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Add hover effects
        square.addEventListener('mouseover', () => {
            if (gameState[index] === "" && gameActive) { // Only hover on empty squares during an active game
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });
});