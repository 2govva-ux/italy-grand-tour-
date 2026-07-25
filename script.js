{
  day: 1,
  city: "Milan",
  title: "Arrival & Historic Centre",
  lat: 45.4642,
  lng: 9.1900,

  travel: "Arrival in Milan and hotel check-in",

  morning: [
    "Arrive at Milan",
    "Transfer to hotel",
    "Check in and freshen up"
  ],

  afternoon: [
    "Duomo di Milano",
    "Climb the Duomo rooftop",
    "Galleria Vittorio Emanuele II",
    "La Scala Theatre"
  ],

  evening: [
    "Walk through the Navigli district",
    "Traditional Italian aperitivo by the canals"
  ],

  restaurant: "Rita & Cocktails",

  budget: "£110–£150",

  walking: "8 km",

  tip: "Visit the Duomo rooftop about two hours before sunset for beautiful city views and shorter queues."
},
{
day:2,
city:"Milan",
title:"Da Vinci & Sforza Castle",
lat:45.4700,
lng:9.1800,
places:[
"Sforza Castle",
"Santa Maria delle Grazie",
"Sempione Park"
]
},
{
day:3,
city:"Florence",
title:"Historic Florence",
lat:43.7696,
lng:11.2558,
places:[
"Duomo",
"Ponte Vecchio",
"Piazza della Signoria",
"Piazzale Michelangelo"
]
},
{
day:4,
city:"Florence",
title:"Renaissance Masterpieces",
lat:43.7696,
lng:11.2558,
places:[
"Uffizi Gallery",
"Accademia Gallery",
"Michelangelo's David"
]
},
{
day:5,
city:"Tuscany",
title:"Pisa or Siena",
lat:43.7230,
lng:10.3966,
places:[
"Leaning Tower of Pisa",
"Piazza dei Miracoli"
]
},
{
day:6,
city:"Rome",
title:"Historic Centre",
lat:41.9028,
lng:12.4964,
places:[
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
lat:41.8902,
lng:12.4922,
places:[
"Colosseum",
"Roman Forum",
"Palatine Hill"
]
},
{
day:8,
city:"Vatican",
title:"Vatican Museums",
lat:41.9022,
lng:12.4539,
places:[
"St Peter's Basilica",
"Sistine Chapel",
"Castel Sant'Angelo"
]
},
{
day:9,
city:"Rome",
title:"Villa Borghese",
lat:41.9142,
lng:12.4923,
places:[
"Galleria Borghese",
"Villa Borghese",
"Monti"
]
},
{
day:10,
city:"Naples",
title:"Naples & Pompeii",
lat:40.8518,
lng:14.2681,
places:[
"Historic Centre",
"Pompeii"
]
},
{
day:11,
city:"Rome",
title:"Departure",
lat:41.9010,
lng:12.5018,
places:[
"Roma Termini",
"Fiumicino Airport"
]
}
];

const map = L.map("map").setView([42.5,12.5],6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
maxZoom:19,
attribution:"© OpenStreetMap"
}).addTo(map);

const dayBar=document.getElementById("days");
const details=document.getElementById("details");

const route=[];

itinerary.forEach(stop=>{

route.push([stop.lat,stop.lng]);

const marker=L.marker([stop.lat,stop.lng]).addTo(map);

marker.bindPopup(
`<b>Day ${stop.day}</b><br>${stop.city}<br>${stop.title}`
);

const button=document.createElement("button");

button.textContent="Day "+stop.day;

button.onclick=()=>{

map.flyTo([stop.lat,stop.lng],12);
details.innerHTML = `
<h2>🇮🇹 Day ${stop.day} – ${stop.city}</h2>

<h3>${stop.title}</h3>

<p><strong>🚄 Travel</strong><br>${stop.travel}</p>

<p><strong>☀ Morning</strong></p>
<ul>
${stop.morning.map(item => `<li>${item}</li>`).join("")}
</ul>

<p><strong>🌇 Afternoon</strong></p>
<ul>
${stop.afternoon.map(item => `<li>${item}</li>`).join("")}
</ul>

<p><strong>🌙 Evening</strong></p>
<ul>
${stop.evening.map(item => `<li>${item}</li>`).join("")}
</ul>

<p><strong>🍝 Restaurant</strong><br>${stop.restaurant}</p>

<p><strong>💷 Budget</strong><br>${stop.budget}</p>

<p><strong>👟 Walking</strong><br>${stop.walking}</p>

<p><strong>💡 Tip</strong><br>${stop.tip}</p>
`;


};

dayBar.appendChild(button);

});

L.polyline(route,{
color:"#8b1e2d",
weight:5
}).addTo(map);

details.innerHTML=`
<h2>Welcome to Italy 🇮🇹</h2>
<p>Select any day above to begin your journey.</p>
`;