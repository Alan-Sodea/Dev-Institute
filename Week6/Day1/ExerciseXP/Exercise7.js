(function(userName) {
    const profileDiv = document.querySelector('.profile');
    profileDiv.innerHTML = `
        <img src="https://via.placeholder.com/40" alt="Profile Picture">
        <span>Welcome, ${userName}!</span>
    `;
})('John');