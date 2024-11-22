document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const contactData = {
            name: name,
            email: email,
            message: message
        };

        localStorage.setItem('contactData', JSON.stringify(contactData));

        alert('Thank you for your message! We will get back to you shortly.');

        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

function getQueryParams() {
    let params = {};
    window.location.search.substring(1).split("&").forEach(function(param) {
        let keyValue = param.split("=");
        params[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });
    return params;
}

window.onload = function() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (username) {
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('usernameDisplay').innerText = "Welcome " + username;
        let usernameValue = document.getElementById('name');
        let emailValue = document.getElementById('email');
        usernameValue.value = username;
        emailValue.value = email;
    }

    let params = getQueryParams();
    if (params.packageName && params.cost && params.gender && params.maxAge) {
        let usernameValue = document.getElementById('name');
        let emailValue = document.getElementById('email');
        let messageTextarea = document.getElementById('message');
        usernameValue.value = username;
        emailValue.value = email;
        messageTextarea.value = `Package: ${params.packageName}\nCost: ${params.cost}\nGender: ${params.gender}\nAge: ${params.maxAge}\n\n`;
    }
};
