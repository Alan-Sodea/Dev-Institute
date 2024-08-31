// // Part I
// setTimeout(function() {
//     alert('Hello World');
// }, 2000);


// // Part II
// setTimeout(function() {
//     const container = document.getElementById('container');
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = 'Hello World';
//     container.appendChild(newParagraph);
// }, 2000);


// Part III
let intervalId;
let paragraphCount = 0;

function addParagraph() {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello World';
    container.appendChild(newParagraph);
    paragraphCount++;

    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}

// Set up interval to add a paragraph every 2 seconds
intervalId = setInterval(addParagraph, 2000);

// Set up event listener for button to clear the interval
document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
});
