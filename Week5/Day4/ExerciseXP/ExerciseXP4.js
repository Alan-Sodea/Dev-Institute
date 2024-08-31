document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');
    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        const radius = parseFloat(radiusInput.value);
        if (isNaN(radius) || radius <= 0) {
            alert('Please enter a valid positive number for the radius.');
            return;
        }

        // Volume of a sphere formula: (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(2); // Set the volume and round to 2 decimal places
    });
});
