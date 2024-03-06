function validatelogin() {
    console.log('Login button clicked'); 

    var emailInput = document.getElementById('Email').value;
    var passwordInput = document.getElementById('password').value;

    
    if (emailInput && passwordInput) {
        alert('Login successful!');
        window.location.href = 'project.html';
    } else {
        alert('Login failed. Please enter both email and password.');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

