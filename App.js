// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées par défaut pour centrer la carte sur un emplacement
    const defaultLatitude = 48.858844;
    const defaultLongitude = 2.294351;

    // Récupérer les informations de latitude, longitude et altitude (exemple)
    const latitude = 48.858844;
    const longitude = 2.294351;
    const altitude = 100; // en mètres

    // Création de la carte
    const map = L.map('map').setView([defaultLatitude, defaultLongitude], 13);

    // Chargement des tuiles de la carte (utilisation de Leaflet OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Création d'un marqueur à partir des coordonnées fournies
    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`Latitude: ${latitude}<br>Longitude: ${longitude}<br>Altitude: ${altitude} m`).openPopup();
}

// Appel de la fonction d'initialisation de la carte une fois que le document est chargé
document.addEventListener('DOMContentLoaded', initMap);
