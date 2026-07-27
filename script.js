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
  },
  {
  day: 4,
  city: "Florence",
  title: "Renaissance Florence",
  coords: [43.7687, 11.2550],
  items: [
    "Uffizi Gallery",
    "Accademia Gallery",
    "Michelangelo's David",
    "Bistecca Fiorentina Dinner"
  ]
},
{
  day: 5,
  city: "Pisa",
  title: "Day Trip",
  coords: [43.7230, 10.3966],
  items: [
    "Leaning Tower of Pisa",
    "Piazza dei Miracoli",
    "Historic Centre"
  ]
},
{
  day: 6,
  city: "Rome",
  title: "Historic Centre",
  coords: [41.9028, 12.4964],
  items: [
    "Trevi Fountain",
    "Pantheon",
    "Piazza Navona",
    "Spanish Steps"
  ]
},
{
  day: 7,
  city: "Rome",
  title: "Ancient Rome",
  coords: [41.8902, 12.4922],
  items: [
    "Colosseum",
    "Roman Forum",
    "Palatine Hill"
  ]
},
{
  day: 8,
  city: "Vatican City",
  title: "Vatican Museums",
  coords: [41.9022, 12.4539],
  items: [
    "Vatican Museums",
    "Sistine Chapel",
    "St Peter's Basilica",
    "Castel Sant'Angelo"
  ]
},
{
  day: 9,
  city: "Rome",
  title: "Villa Borghese",
  coords: [41.9142, 12.4923],
  items: [
    "Villa Borghese",
    "Galleria Borghese",
    "Monti District"
  ]
},
{
  day: 10,
  city: "Naples",
  title: "Naples & Pompeii",
  coords: [40.8518, 14.2681],
  items: [
    "Historic Centre",
    "Pizza Tasting",
    "Pompeii"
  ]
},
{
  day: 11,
  city: "Rome",
  title: "Departure",
  coords: [41.9010, 12.5018],
  items: [
    "Roma Termini",
    "Leonardo Express",
    "Fiumicino Airport"
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