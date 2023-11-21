// Inhalt der login.html
document.querySelector('.container').innerHTML = `
    <div class="login-container">
        <img src="logo.png" alt="ChargeBuddy Logo" class="logo">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Benutzername:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Passwort:</label>
            <input type="password" id="password" name="password" required>

            <button type="button" onclick="login()">Anmelden</button>
        </form>
    </div>
`;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hier solltest du die eingegebenen Daten mit deiner Datenbank oder Authentifizierungsdienst überprüfen.
    // Für dieses Beispiel ist das Passwort einfach "password".
    if (password === "password") {
        // Authentifizierung erfolgreich, weiterleiten zum Dashboard
        loadPage('dashboard.html');
    } else {
        alert("Falscher Benutzername oder Passwort. Versuche es erneut.");
    }
}
