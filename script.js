// ==========================
// Italy Grand Tour v1.0
// ==========================

const itinerary = [
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

itinerary.forEach(stop=>{

route.push(stop.coords);

L.marker(stop.coords)
.addTo(map)
.bindPopup(
`<b>Day ${stop.day}</b><br>${stop.city}<br>${stop.title}`
);

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