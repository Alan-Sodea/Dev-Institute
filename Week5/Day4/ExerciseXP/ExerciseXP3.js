document.addEventListener('DOMContentLoaded', function() {
    const allBoldItems = [];

    function getBoldItems() {
        // Collect all bold items inside the paragraph
        allBoldItems.push(...document.querySelectorAll('p strong'));
    }

    function highlight() {
        // Change the color of all bold text to blue
        allBoldItems.forEach(item => item.style.color = 'blue');
    }

    function returnItemsToDefault() {
        // Change the color of all bold text back to black
        allBoldItems.forEach(item => item.style.color = 'black');
    }

    const paragraph = document.querySelector('p');
    getBoldItems();
    
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});
