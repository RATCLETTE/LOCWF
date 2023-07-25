// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées par défaut pour centrer la carte sur un emplacement
    const latitude = 48.858844;
    const longitude = 2.294351;

    // Création de la carte
    const map = L.map('map').setView([latitude, longitude], 13);

    // Chargement des tuiles de la carte (utilisation de Leaflet OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ajout d'un marqueur à la position actuelle de l'utilisateur
    map.locate({ setView: true, maxZoom: 16 });

    function onLocationFound(e) {
        const radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map)
            .bindPopup("Vous êtes dans un rayon de " + radius + " mètres de ce point").openPopup();
        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert("La localisation a échoué. Veuillez activer la géolocalisation dans votre navigateur.");
    }

    map.on('locationerror', onLocationError);
}

// Appel de la fonction d'initialisation de la carte une fois que le document est chargé
document.addEventListener('DOMContentLoaded', initMap);
