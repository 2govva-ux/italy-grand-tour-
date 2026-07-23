// Create map centered on Italy
const map = L.map("map").setView([42.5, 12.5], 6);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

// Store route coordinates
const routeCoordinates = [];

// Add attraction markers
itinerary.forEach(day => {

    routeCoordinates.push(day.coordinates);

    day.attractions.forEach(place => {

        L.marker(place.coords)
            .addTo(map)
            .bindPopup(`
                <h3>${place.name}</h3>
                <strong>${day.city}</strong><br>
                Day ${day.day}<br>
                ${place.type}
            `);

    });

});

// Draw travel route
L.polyline(routeCoordinates, {
    color: "#6C1F2D",
    weight: 5,
    opacity: 0.8
}).addTo(map);

// Fit map to route
map.fitBounds(routeCoordinates);