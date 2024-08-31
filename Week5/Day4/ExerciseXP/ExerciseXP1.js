document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and log the <h1>
    const h1 = document.querySelector('article h1');
    console.log(h1);

    // Remove the last paragraph in the <article> tag
    const article = document.querySelector('article');
    const lastParagraph = article.querySelector('p:last-of-type');
    lastParagraph.remove();

    // Change the background color of <h2> to red when clicked
    const h2 = article.querySelector('h2');
    h2.addEventListener('click', function() {
        h2.style.backgroundColor = 'red';
    });

    // Hide the <h3> when clicked
    const h3 = article.querySelector('h3');
    h3.addEventListener('click', function() {
        h3.style.display = 'none';
    });

    // Add a button to make all paragraph text bold
    const button = document.createElement('button');
    button.textContent = 'Make Text Bold';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        const paragraphs = article.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.fontWeight = 'bold';
        });
    });

    // BONUS: Set a random font size for <h1> on hover
    h1.addEventListener('mouseover', function() {
        const randomSize = Math.floor(Math.random() * 101);
        h1.style.fontSize = `${randomSize}px`;
    });

    // BONUS: Fade out the 2nd paragraph on hover
    const secondParagraph = article.querySelectorAll('p')[1];
    secondParagraph.addEventListener('mouseover', function() {
        secondParagraph.style.transition = 'opacity 1s';
        secondParagraph.style.opacity = '0';
    });
});
