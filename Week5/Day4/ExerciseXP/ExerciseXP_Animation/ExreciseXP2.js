// Exercise 2
function myMove() {
    const animate = document.getElementById('animate');
    const container = document.getElementById('container');
    const containerWidth = container.clientWidth;
    let position = 0;

    // Move the box every millisecond
    const intervalId = setInterval(function() {
        // Move 1px to the right
        position += 1;
        animate.style.left = position + 'px';

        // Stop the interval if the box reaches the end
        if (position >= containerWidth - animate.clientWidth) {
            clearInterval(intervalId);
        }
    }, 1);
}
