document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    
    function fetchGame() {
        fetch('/game')
            .then(response => response.json())
            .then(data => {
                const { emoji, options, answer } = data;
                document.getElementById('emoji').textContent = emoji;
                const optionsDiv = document.getElementById('options');
                optionsDiv.innerHTML = '';
                options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.textContent = option;
                    btn.classList.add('option');
                    btn.addEventListener('click', () => checkGuess(option, answer));
                    optionsDiv.appendChild(btn);
                });
            });
    }

    function checkGuess(guess, answer) {
        fetch('/guess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ guess, answer })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = data.result;
            if (data.result === 'Correct!') {
                score += 10; // Increment score
            }
            fetchGame(); // Load a new game
        });
    }

    function loadLeaderboard() {
        fetch('/leaderboard')
            .then(response => response.json())
            .then(data => {
                const leaderboardDiv = document.getElementById('leaderboard');
                leaderboardDiv.innerHTML = '';
                data.forEach(entry => {
                    const div = document.createElement('div');
                    div.textContent = `${entry.name}: ${entry.score}`;
                    leaderboardDiv.appendChild(div);
                });
            });
    }

    fetchGame();
    loadLeaderboard();
});
