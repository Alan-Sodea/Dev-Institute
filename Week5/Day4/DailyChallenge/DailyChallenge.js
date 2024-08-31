// Array to hold different story templates
const stories = [
    "Once upon a time, there was a {adjective} {noun} who loved to {verb} in the {place}. One day, {person} visited and they became best friends.",
    "In the {place}, a {adjective} {noun} was seen {verb} by {person}. It was a sight to behold!",
    "The {noun} was very {adjective} and decided to {verb} all around the {place}. Everyone was amazed, especially {person}."
];

// Function to generate a random story
function getRandomStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}

// Function to fill in the story template
function generateStory(noun, adjective, person, verb, place) {
    const storyTemplate = getRandomStory();
    return storyTemplate
        .replace("{noun}", noun)
        .replace("{adjective}", adjective)
        .replace("{person}", person)
        .replace("{verb}", verb)
        .replace("{place}", place);
}

// Event listener for form submission
document.getElementById('libform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Retrieve values from inputs
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Check if all values are not empty
    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields.');
        return;
    }

    // Generate and display the story
    const story = generateStory(noun, adjective, person, verb, place);
    document.getElementById('story').textContent = story;
});

// Event listener for shuffle button
document.getElementById('lib-button').addEventListener('click', function() {
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Generate and display a new story while keeping the current values
    if (noun && adjective && person && verb && place) {
        const story = generateStory(noun, adjective, person, verb, place);
        document.getElementById('story').textContent = story;
    }
});
