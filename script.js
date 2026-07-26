// ==========================
// Italy Grand Tour v1.0
// ==========================

const itinerary = [
    const attractions = [
  // Day 1–2: Milan
  {
    name: "Duomo di Milano",
    day: 1,
    city: "Milan",
    coords: [45.4642, 9.1916],
    type: "Cathedral",
    description: "Climb the rooftop for panoramic views."
  },
  {
    name: "Galleria Vittorio Emanuele II",
    day: 1,
    city: "Milan",
    coords: [45.4659, 9.1900],
    type: "Shopping",
    description: "Historic shopping arcade."
  },
  {
    name: "La Scala",
    day: 1,
    city: "Milan",
    coords: [45.4670, 9.1899],
    type: "Theatre",
    description: "One of the world's most famous opera houses."
  },
  {
    name: "Navigli",
    day: 1,
    city: "Milan",
    coords: [45.4519, 9.1738],
    type: "District",
    description: "Perfect for an evening aperitivo."
  },
  {
    name: "Sforza Castle",
    day: 2,
    city: "Milan",
    coords: [45.4707, 9.1798],
    type: "Castle",
    description: "Historic fortress with museums."
  },
  {
    name: "Santa Maria delle Grazie",
    day: 2,
    city: "Milan",
    coords: [45.4659, 9.1705],
    type: "Church",
    description: "Home of Leonardo's Last Supper."
  },

  // Florence
  {
    name: "Florence Cathedral",
    day: 3,
    city: "Florence",
    coords: [43.7731, 11.2560],
    type: "Cathedral",
    description: "The iconic Duomo."
  },
  {
    name: "Ponte Vecchio",
    day: 3,
    city: "Florence",
    coords: [43.7687, 11.2531],
    type: "Bridge",
    description: "Florence's famous medieval bridge."
  },
  {
    name: "Piazzale Michelangelo",
    day: 3,
    city: "Florence",
    coords: [43.7629, 11.2651],
    type: "Viewpoint",
    description: "Best sunset in Florence."
  },
  {
    name: "Uffizi Gallery",
    day: 4,
    city: "Florence",
    coords: [43.7678, 11.2553],
    type: "Museum",
    description: "Masterpieces of the Renaissance."
  },
  {
    name: "Accademia Gallery",
    day: 4,
    city: "Florence",
    coords: [43.7761, 11.2587],
    type: "Museum",
    description: "Michelangelo's David."
  },

  // Pisa
  {
    name: "Leaning Tower of Pisa",
    day: 5,
    city: "Pisa",
    coords: [43.7230, 10.3966],
    type: "Landmark",
    description: "One of Italy's most famous sights."
  },

  // Rome
  {
    name: "Trevi Fountain",
    day: 6,
    city: "Rome",
    coords: [41.9009, 12.4833],
    type: "Landmark",
    description: "Throw a coin to ensure your return."
  },
  {
    name: "Pantheon",
    day: 6,
    city: "Rome",
    coords: [41.8986, 12.4769],
    type: "Historic Site",
    description: "Ancient Roman temple."
  },
  {
    name: "Piazza Navona",
    day: 6,
    city: "Rome",
    coords: [41.8992, 12.4731],
    type: "Square",
    description: "Beautiful Baroque square."
  },
  {
    name: "Spanish Steps",
    day: 6,
    city: "Rome",
    coords: [41.9059, 12.4823],
    type: "Landmark",
    description: "Iconic staircase."
  },
  {
    name: "Colosseum",
    day: 7,
    city: "Rome",
    coords: [41.8902, 12.4922],
    type: "Historic Site",
    description: "The symbol of Ancient Rome."
  },
  {
    name: "Roman Forum",
    day: 7,
    city: "Rome",
    coords: [41.8925, 12.4853],
    type: "Historic Site",
    description: "Heart of Ancient Rome."
  },
  {
    name: "Palatine Hill",
    day: 7,
    city: "Rome",
    coords: [41.8894, 12.4882],
    type: "Historic Site",
    description: "Birthplace of Rome."
  },

  // Vatican
  {
    name: "Vatican Museums",
    day: 8,
    city: "Vatican",
    coords: [41.9065, 12.4536],
    type: "Museum",
    description: "Includes the Sistine Chapel."
  },
  {
    name: "St Peter's Basilica",
    day: 8,
    city: "Vatican",
    coords: [41.9022, 12.4539],
    type: "Church",
    description: "Climb the dome."
  },
  {
    name: "Castel Sant'Angelo",
    day: 8,
    city: "Rome",
    coords: [41.9031, 12.4663],
    type: "Castle",
    description: "Wonderful riverside fortress."
  },

  // Naples
  {
    name: "Historic Centre of Naples",
    day: 10,
    city: "Naples",
    coords: [40.8518, 14.2681],
    type: "Historic Centre",
    description: "Perfect for authentic pizza."
  },
  {
    name: "Pompeii",
    day: 10,
    city: "Pompeii",
    coords: [40.7485, 14.4869],
    type: "Archaeological Site",
    description: "Ancient Roman city preserved by Vesuvius."
  },

  // Departure
  {
    name: "Roma Termini",
    day: 11,
    city: "Rome",
    coords: [41.9010, 12.5018],
    type: "Station",
    description: "Leonardo Express to the airport."
  },
  {
    name: "Fiumicino Airport",
    day: 11,
    city: "Rome",
    coords: [41.7999, 12.2462],
    type: "Airport",
    description: "Departure."
  }
];
{
day:1,
city:"Milan",
title:"Arrival & City Centre",
coords:[45.4642,9.1900],
travel:"Arrival and hotel check-in",
items:[
"Duomo di Milano",
"Duomo Rooftop",
"Galleria Vittorio Emanuele II",
"La Scala",
"Navigli Aperitivo"
]
},
{
day:2,
city:"Milan",
title:"Da Vinci & Sforza Castle",
coords:[45.4700,9.1799],
travel:"Walk around Milan",
items:[
"Sforza Castle",
"Sempione Park",
"Santa Maria delle Grazie",
"The Last Supper"
]
},
{
day:3,
city:"Florence",
title:"Historic Florence",
coords:[43.7696,11.2558],
travel:"🚄 Milan → Florence (2h)",
items:[
"Florence Cathedral",
"Piazza della Signoria",
"Ponte Vecchio",
"Piazzale Michelangelo"
]
},
{
day:4,
city:"Florence",
title:"Renaissance",
coords:[43.7687,11.2550],
travel:"Explore Florence",
items:[
"Uffizi Gallery",
"Accademia Gallery",
"Michelangelo's David",
"Bistecca Fiorentina"
]
},
{
day:5,
city:"Pisa / Siena",
title:"Day Trip",
coords:[43.7230,10.3966],
travel:"🚄 Optional day trip",
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
travel:"🚄 Florence → Rome (1h30)",
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
travel:"Walk",
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
travel:"Metro / Walk",
items:[
"Vatican Museums",
"Sistine Chapel",
"St Peter's Basilica",
"Castel Sant'Angelo"
]
},
{
day:9,
city:"Rome",
title:"Villa Borghese",
coords:[41.9142,12.4923],
travel:"Walk",
items:[
"Galleria Borghese",
"Villa Borghese",
"Monti District"
]
},
{
day:10,
city:"Naples",
title:"Naples & Pompeii",
coords:[40.8518,14.2681],
travel:"🚄 Rome → Naples (1h10)",
items:[
"Historic Centre",
"Pizza",
"Pompeii"
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

const map = L.map("map").setView([42.5,12.5],6);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19,
attribution:"© OpenStreetMap"
}
).addTo(map);

const info=document.getElementById("info");
const days=document.getElementById("days");

const route=[];

attractions.forEach(place => {

    const marker = L.marker(place.coords).addTo(map);

markers.push({
    marker,
    place
});
        .addTo(map)
        .bindPopup(`
            <strong>${place.name}</strong><br>
            ${place.city}<br>
            <em>${place.type}</em><br><br>
            ${place.description}
        `);

});

const btn=document.createElement("button");

btn.textContent="Day "+stop.day;

btn.onclick=()=>{

map.flyTo(stop.coords,12,{
duration:1.5
});

info.innerHTML=`
<h2>Day ${stop.day} – ${stop.city}</h2>

<p><strong>${stop.title}</strong></p>

<p>${stop.travel}</p>

<h3>Highlights</h3>

<ul>

${stop.items.map(i=>`<li>${i}</li>`).join("")}

</ul>
`;

};

days.appendChild(btn);

});

L.polyline(route,{
color:"#8B1E2D",
weight:5
}).addTo(map);
const markers = []; 
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();

    markers.forEach(item => {

        if(item.place.name.toLowerCase().includes(search)){

            map.flyTo(item.place.coords,15);

            item.marker.openPopup();

        }

    });

});