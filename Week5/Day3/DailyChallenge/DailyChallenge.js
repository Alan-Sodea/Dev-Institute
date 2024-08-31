document.addEventListener("DOMContentLoaded", function() {
    // Array of planets with their respective moons
    const solarSystem = [
        { name: 'Mercury', color: 'gray', moons: 0 },
        { name: 'Venus', color: 'yellow', moons: 0 },
        { name: 'Earth', color: 'blue', moons: 1 },
        { name: 'Mars', color: 'red', moons: 2 },
        { name: 'Jupiter', color: 'brown', moons: 79 },
        { name: 'Saturn', color: 'goldenrod', moons: 83 },
        { name: 'Uranus', color: 'lightblue', moons: 27 },
        { name: 'Neptune', color: 'blue', moons: 14 }
    ];

    // Select the section to append planets
    const section = document.querySelector('.listPlanets');

    // Create planets and moons
    solarSystem.forEach((planet, index) => {
        // Create planet div
        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetDiv.style.backgroundColor = planet.color;
        
        // Add planet name
        const planetName = document.createElement('span');
        planetName.textContent = planet.name;
        planetDiv.appendChild(planetName);

        // Append planet div to the section
        section.appendChild(planetDiv);

        // Create moons for each planet
        for (let i = 0; i < planet.moons; i++) {
            const moonDiv = document.createElement('div');
            moonDiv.className = 'moon';

            // Position the moons around the planet
            // Simple position calculation for demonstration
            const angle = (i * 360 / planet.moons) + 'deg';
            moonDiv.style.transform = `rotate(${angle}) translateX(150px) rotate(-${angle})`; // Adjust for positioning
            planetDiv.appendChild(moonDiv);
        }
    });
});
