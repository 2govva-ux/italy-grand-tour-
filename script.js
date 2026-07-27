// =====================================
// Italy Grand Tour v2
// Part 1
// =====================================

const itinerary = [

{
day:1,
city:"Milan",
title:"Arrival & City Centre",
coords:[45.4642,9.1900],
travel:"Arrival in Milan",
items:[
"Duomo di Milano",
"Duomo Rooftop",
"Galleria Vittorio Emanuele II",
"La Scala",
"Navigli"
]
},

{
day:2,
city:"Milan",
title:"Leonardo & Castles",
coords:[45.4707,9.1798],
travel:"Walking",
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
travel:"Frecciarossa Milan → Florence",
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
title:"Renaissance Florence",
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
city:"Pisa / Siena",
title:"Day Trip",
coords:[43.7230,10.3966],
travel:"Regional Train",
items:[
"Leaning Tower",
"Piazza dei Miracoli",
"Siena Historic Centre"
]
},

{
day:6,
city:"Rome",
title:"Historic Centre",
coords:[41.9028,12.4964],
travel:"Frecciarossa Florence → Rome",
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
"St Peter's Basilica",
"Castel Sant'Angelo"
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
"Monti District"
]
},

{
day:10,
city:"Naples",
title:"Naples & Pompeii",
coords:[40.8518,14.2681],
travel:"Frecciarossa Rome → Naples",
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

const map=L.map("map").setView([42.5,12.5],6);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19,
attribution:"© OpenStreetMap contributors"
}
).addTo(map);

const info=document.getElementById("info");
const days=document.getElementById("days");

const route=itinerary.map(day=>day.coords);

L.polyline(route,{
color:"#8B1E2D",
weight:5
}).addTo(map);
// =====================================
// Italy Grand Tour v2
// Part 2
// =====================================

itinerary.forEach(day=>{

    L.marker(day.coords)
        .addTo(map)
        .bindPopup(`
            <strong>Day ${day.day}</strong><br>
            ${day.city}<br>
            ${day.title}
        `);

    const button=document.createElement("button");

    button.textContent="Day "+day.day;

    button.addEventListener("click",()=>{

        map.flyTo(day.coords,12,{
            duration:1.5
        });

        info.innerHTML=`

        <h2>Day ${day.day} – ${day.city}</h2>

        <h3>${day.title}</h3>

        <p><strong>Travel:</strong> ${day.travel}</p>

        <h3>Highlights</h3>

        <ul>

        ${day.items.map(item=>`<li>${item}</li>`).join("")}

        </ul>

        `;

    });

    days.appendChild(button);

});

// Open Day 1 automatically

days.querySelector("button").click();
// =====================================
// Italy Grand Tour v2
// Part 3 - Attractions
// =====================================

const attractions = [

{
name:"Duomo di Milano",
coords:[45.4642,9.1916],
day:1,
type:"Cathedral"
},

{
name:"Galleria Vittorio Emanuele II",
coords:[45.4659,9.1900],
day:1,
type:"Shopping"
},

{
name:"La Scala",
coords:[45.4670,9.1899],
day:1,
type:"Opera House"
},

{
name:"Navigli",
coords:[45.4519,9.1738],
day:1,
type:"District"
},

{
name:"Sforza Castle",
coords:[45.4707,9.1798],
day:2,
type:"Castle"
},

{
name:"Santa Maria delle Grazie",
coords:[45.4659,9.1705],
day:2,
type:"Church"
},

{
name:"Florence Cathedral",
coords:[43.7731,11.2560],
day:3,
type:"Cathedral"
},

{
name:"Ponte Vecchio",
coords:[43.7687,11.2531],
day:3,
type:"Bridge"
},

{
name:"Piazzale Michelangelo",
coords:[43.7629,11.2651],
day:3,
type:"Viewpoint"
},

{
name:"Uffizi Gallery",
coords:[43.7678,11.2553],
day:4,
type:"Museum"
},

{
name:"Accademia Gallery",
coords:[43.7761,11.2587],
day:4,
type:"Museum"
},

{
name:"Leaning Tower of Pisa",
coords:[43.7230,10.3966],
day:5,
type:"Landmark"
},

{
name:"Trevi Fountain",
coords:[41.9009,12.4833],
day:6,
type:"Landmark"
},

{
name:"Pantheon",
coords:[41.8986,12.4769],
day:6,
type:"Historic Site"
},

{
name:"Colosseum",
coords:[41.8902,12.4922],
day:7,
type:"Historic Site"
},

{
name:"Roman Forum",
coords:[41.8925,12.4853],
day:7,
type:"Historic Site"
},

{
name:"Vatican Museums",
coords:[41.9065,12.4536],
day:8,
type:"Museum"
},

{
name:"St Peter's Basilica",
coords:[41.9022,12.4539],
day:8,
type:"Church"
},

{
name:"Pompeii",
coords:[40.7485,14.4869],
day:10,
type:"Archaeological Site"
}

];

attractions.forEach(place=>{

    L.circleMarker(place.coords,{
        radius:6,
        color:"#0B6E4F",
        fillColor:"#2ECC71",
        fillOpacity:0.9
    })
    .addTo(map)
    .bindPopup(`
        <strong>${place.name}</strong><br>
        ${place.type}<br>
        Day ${place.day}
    `);

});// =====================================
// Italy Grand Tour v2
// Part 4 - Search
// =====================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const search = searchInput.value.trim().toLowerCase();

        if (search.length < 2) return;

        const result = attractions.find(place =>
            place.name.toLowerCase().includes(search)
        );

        if (!result) return;

        map.flyTo(result.coords, 15, {
            duration: 1.5
        });

        L.popup()
            .setLatLng(result.coords)
            .setContent(`
                <strong>${result.name}</strong><br>
                ${result.type}<br>
                Day ${result.day}
            `)
            .openOn(map);

    });

}
