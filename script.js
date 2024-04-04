// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the entered email and password
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Perform authentication checks (replace this with your actual authentication logic)
    if (email === 'admin@example.com' && password === 'password') {
        // Redirect to the dashboard or perform further actions
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
});

// Register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the entered user information
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Perform registration logic (replace this with your actual registration logic)
    // This could include making an AJAX request to a server-side registration endpoint
    alert(`Registration successful for ${name}!`);
});