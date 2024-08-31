// script.js

// Array of colors for the palette
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

// Function to create the color palette
function createColorPalette() {
    const colorPalette = document.getElementById('color-palette');
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.dataset.color = color;
        colorDiv.addEventListener('click', () => {
            selectedColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });
}

// Function to create the grid
function createGrid() {
    const gridContainer = document.getElementById('grid-container');
    for (let i = 0; i < 100; i++) { // 10x10 grid
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridSquare.addEventListener('mousedown', startDrawing);
        gridSquare.addEventListener('mouseover', draw);
        gridSquare.addEventListener('mouseup', stopDrawing);
        gridContainer.appendChild(gridSquare);
    }
}

// Variables to manage the current color and drawing state
let selectedColor = '#000000';
let isDrawing = false;

// Functions to handle drawing
function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function stopDrawing() {
    isDrawing = false;
}

function draw(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = selectedColor;
    }
}

// Initialize the game
createColorPalette();
createGrid();
