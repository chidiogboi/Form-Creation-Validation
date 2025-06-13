document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 2: Add submit event listener to form
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to server
        event.preventDefault();

        // Step 3: Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 4: Initialize validation variables
        let isValid = true;
        const messages = [];

        // Validate username (must be at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }

        // Validate email (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        // Validate password (must be at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        // Step 5: Display feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#ffbaba";
        }
    });
});
