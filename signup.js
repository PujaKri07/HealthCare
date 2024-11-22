document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('Please fill out all fields.');
                return;
            }

            if (username.length < 3) {
                alert('Username must be at least 3 characters long.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            alert('Login successful!');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (fullName === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
                alert('Please fill out all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            if (username.length < 3) {
                alert('Username must be at least 3 characters long.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
                alert('Password must contain both letters and numbers.');
                return;
            }

            localStorage.setItem('username', fullName);
            localStorage.setItem('email', email);
            window.location.href = 'Home.html';
            alert('Sign-up successful! Welcome, ' + fullName + '!');
        });
    }
});
