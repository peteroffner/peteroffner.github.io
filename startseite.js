// Inhalt der startseite.html
document.querySelector('.container').innerHTML = `
    <div class="start-container">
        <img src="logo.png" alt="ChargeBuddy Logo" class="logo">
        <h2>Willkommen bei ChargeBuddy</h2>
        <p>Die Zukunft der Elektromobilität erleben.</p>
        <button onclick="redirectToLogin()">Zum Login</button>
    </div>
`;

function redirectToLogin() {
    loadPage('login.html');
}
