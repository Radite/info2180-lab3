document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');
    let currentPlayer = 'X';  
    let boardState = Array(9).fill(' '); 

    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ];
        
        return winningCombinations.some(combination => 
            combination.every(index => boardState[index] === player)
        );
    }

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (boardState[index] === ' ') {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (checkWinner(currentPlayer)) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    function resetGame() {
        boardState = Array(9).fill(' ');
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        currentPlayer = 'X';
    }

    newGameBtn.addEventListener('click', resetGame);
});
