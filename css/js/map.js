// Initialize Italy map

const map = L.map("map").setView([42.5, 12.5], 6);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Add one marker for each itinerary day
itinerary.forEach(day => {

    L.marker(day.coordinates)
        .addTo(map)
        .bindPopup(`
            <h3>Day ${day.day}</h3>
            <strong>${day.city}</strong><br>
            ${day.title}
        `);

});