// Laden der Ladestationen
function loadLadestationen() {
  // Ajax-Anfrage an den Server
  fetch("/api/ladestationen")
    .then(function(response) {
      // Erfolgreiche Antwort
      if (response.ok) {
        // Ladestationen aus der Antwort in ein Array einlesen
