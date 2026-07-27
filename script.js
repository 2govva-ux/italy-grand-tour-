// ==========================
// Italy Grand Tour v2
// ==========================

const itinerary = [
{
day:1,
city:"Milan",
title:"Arrival & City Centre",
coords:[45.4642,9.1900],
travel:"Arrival",
items:[
"Duomo di Milano",
"Galleria Vittorio Emanuele II",
"La Scala",
"Navigli"
]
},
{
day:2,
city:"Milan",
title:"Castles & Leonardo",
coords:[45.4707,9.1798],
travel:"Walking",
items:[
"Sforza Castle",
"Sempione Park",
"Santa Maria delle Grazie"
]
},
{
day:3,
city:"Florence",
title:"Historic Florence",
coords:[43.7696,11.2558],
travel:"Frecciarossa",
items:[
"Florence Cathedral",
"Ponte Vecchio",
"Piazza della Signoria",
"Piazzale Michelangelo"
]
},
{
day:4,
city:"Florence",
title:"Renaissance",
coords:[43.7687,11.2550],
travel:"Walking",
items:[
"Uffizi Gallery",
"Accademia Gallery",
"Michelangelo's David"
]
},
{
day:5,
city:"Pisa",
title:"Day Trip",
coords:[43.7230,10.3966],
travel:"Train",
items:[
"Leaning Tower",
"Piazza dei Miracoli"
]
},
{
day:6,
city:"Rome",
title:"Historic Centre",
coords:[41.9028,12.4964],
travel:"Frecciarossa",
items:[
"Trevi Fountain",
"Pantheon",
"Piazza Navona",
"Spanish Steps"
]
},
{
day:7,
city:"Rome",
title:"Ancient Rome",
coords:[41.8902,12.4922],
travel:"Walking",
items:[
"Colosseum",
"Roman Forum",
"Palatine Hill"
]
},
{
day:8,
city:"Vatican",
title:"Vatican City",
coords:[41.9022,12.4539],
travel:"Metro",
items:[
"Vatican Museums",
"Sistine Chapel",
"St Peter's Basilica"
]
},
{
day:9,
city:"Rome",
title:"Villa Borghese",
coords:[41.9142,12.4923],
travel:"Walking",
items:[
"Villa Borghese",
"Galleria Borghese",
"Monti"
]
},
{
day:10,
city:"Naples",
title:"Naples & Pompeii",
coords:[40.8518,14.2681],
travel:"Frecciarossa",
items:[
"Historic Centre",
"Pompeii",
"Pizza"
]
},
{
day:11,
city:"Rome",
title:"Departure",
coords:[41.9010,12.5018],
travel:"Leonardo Express",
items:[
"Roma Termini",
"Fiumicino Airport"
]
}
];

const map = L.map("map").setView([42.4,12.4],6);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap contributors",
maxZoom:19
}
).addTo(map);

const info=document.getElementById("info");
const days=document.getElementById("days");

const route=[];

itinerary.forEach(day=>route.push(day.coords));

L.polyline(route,{
color:"#8B1E2D",
weight:5
}).addTo(map);// ---------- Create day buttons ----------

itinerary.forEach(day => {

    L.marker(day.coords)
        .addTo(map)
        .bindPopup(`<strong>Day ${day.day}</strong><br>${day.city}<br>${day.title}`);

    const button = document.createElement("button");
    button.textContent = "Day " + day.day;

    button.addEventListener("click", () => {

        map.flyTo(day.coords, 12, {
            duration: 1.5
        });

        info.innerHTML = `
            <h2>Day ${day.day} – ${day.city}</h2>

            <p><strong>${day.title}</strong></p>

            <p>🚄 ${day.travel}</p>

            <ul>
                ${day.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;

    });

    days.appendChild(button);

});

// Show Day 1 automatically
days.querySelector("button").click();

