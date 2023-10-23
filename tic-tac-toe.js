document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';  // Start with player X
    let boardState = Array(9).fill(' ');  // Initial state of the board

    squares.forEach((square, index) => {
        square.classList.add('square');

        // Attach click event listener to each square
        square.addEventListener('click', function() {
            // Check if the square is empty and if so, make the move
            if (boardState[index] === ' ') {
                boardState[index] = currentPlayer;

                square.textContent = currentPlayer; // Set the text of the square to X or O
                square.classList.add(currentPlayer); // Add the X or O class for styling

                // Toggle the current player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
