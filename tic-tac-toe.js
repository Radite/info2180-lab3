document.addEventListener('DOMContentLoaded', function() {
    // Select all the div elements inside the #board element
    const squares = document.querySelectorAll('#board div');

    // Add the 'square' class to each div element
    squares.forEach(square => {
        square.classList.add('square');
    });
});
