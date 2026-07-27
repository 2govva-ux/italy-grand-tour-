const itinerary = [
  {
    day: 1,
    city: "Milan",
    title: "Arrival & City Centre",
    coords: [45.4642, 9.1900],
    items: [
      "Duomo di Milano",
      "Galleria Vittorio Emanuele II",
      "La Scala",
      "Navigli"
    ]
  },
  {
    day: 2,
    city: "Florence",
    title: "Historic Centre",
    coords: [43.7696, 11.2558],
    items: [
      "Duomo",
      "Ponte Vecchio",
      "Uffizi Gallery"
    ]
  },
  {
    day: 3,
    city: "Rome",
    title: "Ancient Rome",
    coords: [41.9028, 12.4964],
    items: [
      "Colosseum",
      "Pantheon",
      "Trevi Fountain"
    ]
  }
];

const map = L.map("map").setView([42.5, 12.5], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

const info = document.getElementById("info");
const days = document.getElementById("days");

itinerary.forEach(stop => {

  L.marker(stop.coords)
    .addTo(map)
    .bindPopup(`<strong>${stop.city}</strong><br>${stop.title}`);

  const button = document.createElement("button");
  button.textContent = "Day " + stop.day;

  button.onclick = () => {
    map.flyTo(stop.coords, 12);

    info.innerHTML = `
      <h2>Day ${stop.day} – ${stop.city}</h2>
      <p><strong>${stop.title}</strong></p>
      <ul>
        ${stop.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  };

  days.appendChild(button);

});
// Draw route
const route = itinerary.map(stop => stop.coords);

L.polyline(route, {
  color: "#8B1E2D",
  weight: 5
}).addTo(map);

// Show Day 1 automatically
document.querySelector("#days button").click();