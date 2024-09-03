const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const apiUrl = 'https://api.giphy.com/v1/gifs/random';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        await fetchAndDisplayGif(query);
    }
});

deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = ''; // Clear all GIFs
});

async function fetchAndDisplayGif(category) {
    try {
        const response = await fetch(`${apiUrl}?tag=${category}&api_key=${apiKey}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        displayGif(gifUrl);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayGif(gifUrl) {
    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';
    
    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = 'GIF';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        gifItem.remove(); // Remove specific gif
    });
    
    gifItem.appendChild(img);
    gifItem.appendChild(deleteBtn);
    gifContainer.appendChild(gifItem);
}
