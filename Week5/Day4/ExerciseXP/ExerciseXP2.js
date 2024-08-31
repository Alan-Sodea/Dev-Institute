document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the form and log it
    const form = document.querySelector('form');
    console.log(form);

    // Retrieve the inputs by id and log them
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    console.log(fnameInput, lnameInput);

    // Retrieve the inputs by name attribute and log them
    const fnameInputByName = document.querySelector('input[name="firstname"]');
    const lnameInputByName = document.querySelector('input[name="lastname"]');
    console.log(fnameInputByName, lnameInputByName);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const firstName = fnameInput.value.trim();
        const lastName = lnameInput.value.trim();

        // Create list items for each input value if not empty
        if (firstName) {
            const li = document.createElement('li');
            li.textContent = firstName;
            document.querySelector('.usersAnswer').appendChild(li);
        }

        if (lastName) {
            const li = document.createElement('li');
            li.textContent = lastName;
            document.querySelector('.usersAnswer').appendChild(li);
        }
    });
});
