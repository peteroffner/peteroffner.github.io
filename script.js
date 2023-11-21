function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hier solltest du die eingegebenen Daten mit deiner Datenbank oder Authentifizierungsdienst überprüfen.
    // Für dieses Beispiel ist das Passwort einfach "password".
    if (password === "password") {
        // Authentifizierung erfolgreich, weiterleiten zum Dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Falscher Benutzername oder Passwort. Versuche es erneut.");
    }
}
