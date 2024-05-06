document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email_or_phone = document.getElementById('email-or-phone').value;
    const password = document.getElementById('password').value;

    if ( (email_or_phone === 'laosarl@gmail.com' && password === 'laosarl123') ||
        (email_or_phone === '+237655510637' && password === 'laosarl123')) {
        alert("Connexion Réussie !");
    } else {
        // document.getElementById('error-message').innerText = 'Adresse e-mail ou mot de passe incorrect !';
        alert("Adresse e-mail ou mot de passe incorrect !");
    }
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.textContent = '🔒';
    } else {
        passwordField.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}
