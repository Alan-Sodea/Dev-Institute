document.addEventListener('DOMContentLoaded', () => {
    const fetchCharacterBtn = document.getElementById('fetchCharacterBtn');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const characterInfo = document.getElementById('characterInfo');
    
    fetchCharacterBtn.addEventListener('click', fetchRandomCharacter);

    function showLoading() {
        loadingMessage.classList.remove('hidden');
        characterInfo.classList.add('hidden');
        errorMessage.classList.add('hidden');
    }

    function hideLoading() {
        loadingMessage.classList.add('hidden');
        characterInfo.classList.remove('hidden');
    }

    function showError() {
        errorMessage.classList.remove('hidden');
        characterInfo.classList.add('hidden');
        loadingMessage.classList.add('hidden');
    }

    async function fetchRandomCharacter() {
        showLoading();
        try {
            const randomId = Math.floor(Math.random() * 83) + 1; // Random ID between 1 and 83
            const response = await fetch(`https://www.swapi.tech/api/people/${randomId}/`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            const character = data.result.properties;

            const homeWorldResponse = await fetch(character.homeworld);
            if (!homeWorldResponse.ok) throw new Error('Network response was not ok');
            const homeWorldData = await homeWorldResponse.json();
            const homeWorldName = homeWorldData.result.properties.name;

            document.getElementById('name').textContent = character.name;
            document.getElementById('height').textContent = character.height;
            document.getElementById('gender').textContent = character.gender;
            document.getElementById('birthYear').textContent = character.birth_year;
            document.getElementById('homeWorld').textContent = homeWorldName;

            hideLoading();
        } catch (error) {
            showError();
            console.error('There was a problem with the fetch operation:', error);
        }
    }
});
