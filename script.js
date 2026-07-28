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
travel:"✈ Arrival in Milan",

items:[
"10:00 • Hotel check-in",
"11:00 • Duomo di Milano",
"12:30 • Climb the Duomo Rooftop",
"14:00 • Lunch near Piazza del Duomo",
"15:30 • Galleria Vittorio Emanuele II",
"17:00 • La Scala",
"19:00 • Aperitivo in Navigli"
],

tips:[
"Purchase Duomo rooftop tickets in advance.",
"Most attractions are within walking distance.",
"Enjoy your first Italian aperitivo before dinner."
],

food:[
"Risotto alla Milanese",
"Cotoletta alla Milanese",
"Aperol Spritz"
],

walking:"Approximately 7 km",
budget:"£50–£80 (excluding accommodation)"
},

{
day:2,
city:"Milan",
title:"Leonardo & Castles",
coords:[45.4707,9.1798],
travel:"🚶 Explore Milan",

items:[
"09:00 • Sforza Castle",
"11:00 • Sempione Park",
"12:30 • Lunch",
"14:00 • Santa Maria delle Grazie",
"15:00 • The Last Supper",
"17:00 • Free afternoon"
],

tips:[
"Book The Last Supper weeks in advance.",
"Carry water during summer.",
"Most museums close on Monday."
],

food:[
"Ossobuco",
"Panettone",
"Italian Espresso"
],

walking:"Approximately 6 km",
budget:"£40–£70"
},

{
day:3,
city:"Florence",
title:"Historic Florence",
coords:[43.7696,11.2558],
travel:"🚄 Frecciarossa • Milan → Florence (≈2h)",

items:[
"09:00 • Train to Florence",
"11:30 • Florence Cathedral",
"13:00 • Lunch",
"14:30 • Piazza della Signoria",
"15:30 • Ponte Vecchio",
"18:00 • Sunset at Piazzale Michelangelo"
],

tips:[
"Walk everywhere—Florence is compact.",
"Visit Piazzale Michelangelo before sunset.",
"Book cathedral dome tickets online."
],

food:[
"Bistecca alla Fiorentina",
"Ribollita",
"Gelato"
],

walking:"Approximately 8 km",
budget:"£45–£75"
},

{
day:4,
city:"Florence",
title:"Renaissance Florence",
coords:[43.7687,11.2550],
travel:"🚶 Explore Florence",

items:[
"09:00 • Uffizi Gallery",
"12:00 • Lunch",
"14:00 • Accademia Gallery",
"15:30 • Michelangelo's David",
"17:00 • Shopping in historic centre"
],

tips:[
"Reserve museum tickets in advance.",
"Allow extra time inside the Uffizi.",
"Most museums prohibit large backpacks."
],

food:[
"Truffle Pasta",
"Tuscan Wine",
"Cantucci"
],

walking:"Approximately 5 km",
budget:"£50–£80"
},

{
day:5,
city:"Pisa / Siena",
title:"Tuscan Day Trip",
coords:[43.7230,10.3966],
travel:"🚄 Regional train",

items:[
"08:30 • Train to Pisa",
"09:30 • Leaning Tower",
"10:30 • Piazza dei Miracoli",
"12:00 • Travel to Siena",
"14:00 • Piazza del Campo",
"15:00 • Siena Cathedral",
"17:00 • Return to Florence"
],

tips:[
"Start early to avoid crowds in Pisa.",
"Wear comfortable shoes on Siena's hills.",
"Carry a light jacket for evening."
],

food:[
"Pici Pasta",
"Panforte",
"Tuscan Pecorino"
],

walking:"Approximately 9 km",
budget:"£45–£75"
},

{
day:6,
city:"Rome",
title:"Historic Centre",
coords:[41.9028,12.4964],
travel:"🚄 Frecciarossa • Florence → Rome (≈1h30)",

items:[

"09:00 • Trevi Fountain",
"09:45 • Walk to the Pantheon",
"10:15 • Visit the Pantheon",
"11:30 • Piazza Navona",
"12:30 • Lunch in the historic centre",
"14:00 • Spanish Steps",
"15:00 • Via Condotti shopping",
"16:30 • Gelato break",
"17:30 • Sunset walk around Piazza del Popolo"

],

tips:[
"Book Pantheon tickets online if travelling in peak season.",
"Wear comfortable walking shoes.",
"Carry a refillable water bottle—Rome has many public fountains."
],

food:[
"Cacio e Pepe",
"Supplì",
"Artisan Gelato"
],

walking:"Approximately 6 km",
budget:"£40–£70 (excluding accommodation)"
},

{
day:7,
city:"Rome",
title:"Ancient Rome",
coords:[41.8902,12.4922],
travel:"🚶 Walking",

items:[
"08:30 • Colosseum",
"11:00 • Roman Forum",
"13:00 • Lunch",
"14:30 • Palatine Hill",
"17:00 • Capitoline Hill",
"19:00 • Dinner in Monti District"
],

tips:[
"Book Colosseum tickets before travelling.",
"Carry water during summer.",
"Wear comfortable walking shoes."
],

food:[
"Carbonara",
"Supplì",
"Tiramisù"
],

walking:"Approximately 7 km",
budget:"£45–£75"
},

{
day:8,
city:"Vatican City",
title:"The Vatican",
coords:[41.9022,12.4539],
travel:"🚇 Metro or Walk",

items:[
"08:30 • Vatican Museums",
"11:30 • Sistine Chapel",
"13:00 • Lunch",
"14:30 • St Peter's Basilica",
"16:30 • Climb the Dome",
"18:00 • Castel Sant'Angelo"
],

tips:[
"Arrive before opening time.",
"Shoulders and knees must be covered.",
"Expect airport-style security."
],

food:[
"Roman Pizza",
"Gelato",
"Espresso"
],

walking:"Approximately 6 km",
budget:"£40–£70"
},

{
day:9,
city:"Rome",
title:"Parks & Local Rome",
coords:[41.9142,12.4923],
travel:"🚶 Walking",

items:[
"09:00 • Villa Borghese",
"10:00 • Galleria Borghese",
"13:00 • Lunch",
"15:00 • Piazza del Popolo",
"17:00 • Explore Monti District",
"20:00 • Traditional Roman dinner"
],

tips:[
"Galleria Borghese requires advance booking.",
"Perfect day for a slower pace.",
"Take time to enjoy cafés."
],

food:[
"Cacio e Pepe",
"Artichokes Roman Style",
"Gelato"
],

walking:"Approximately 5 km",
budget:"£40–£70"
},

{
day:10,
city:"Naples",
title:"Naples & Pompeii",
coords:[40.8518,14.2681],
travel:"🚄 Frecciarossa • Rome → Naples (≈1h10)",

items:[
"08:00 • Train to Naples",
"09:30 • Historic Centre",
"11:30 • Authentic Neapolitan Pizza",
"13:00 • Train to Pompeii",
"14:00 • Explore Pompeii",
"18:00 • Return to Rome"
],

tips:[
"Pompeii has very little shade.",
"Bring plenty of water.",
"Comfortable shoes are essential."
],

food:[
"Neapolitan Pizza",
"Sfogliatella",
"Limoncello"
],

walking:"Approximately 8 km",
budget:"£50–£85"
},

{
day:11,
city:"Rome",
title:"Departure",
coords:[41.9010,12.5018],
travel:"🚆 Leonardo Express to Fiumicino Airport",

items:[
"08:00 • Hotel Check-out",
"09:00 • Roma Termini",
"09:35 • Leonardo Express",
"10:10 • Fiumicino Airport",
"Departure"
],

tips:[
"Arrive at the airport at least 2½ hours before departure.",
"Validate train tickets if required.",
"Keep passport and boarding pass easily accessible."
],

food:[
"Italian Espresso",
"Cornetto"
],

walking:"Approximately 2 km",
budget:"£20–£40"
},
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

        info.innerHTML = `

<h2>🇮🇹 Day ${day.day} – ${day.city}</h2>

<p style="font-size:18px;font-weight:600;color:#8B1E2D;">
${day.title}
</p>

<p>
🚄 <strong>Travel</strong><br>
${day.travel}
</p>

<hr>

<h3>🗓 Today's Plan</h3>

<ul>
${day.items.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>🍝 Local Food</h3>

<ul>
${day.food.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>💡 Travel Tips</h3>

<ul>
${day.tips.map(item => `<li>${item}</li>`).join("")}
</ul>

<p><strong>🚶 Walking:</strong> ${day.walking}</p>

<p><strong>💷 Estimated Daily Budget:</strong> ${day.budget}</p>

<hr>

<p style="color:#666;font-size:14px;">
Enjoy your day exploring ${day.city}.
</p>

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
type:"Cathedral",
time:"1.5–2 hours",
description:"Milan’s iconic Gothic cathedral. Climb the rooftop for one of the best views of the city."
},

{
name:"Galleria Vittorio Emanuele II",
coords:[45.4659,9.1900],
day:1,
type:"Historic Shopping Gallery",
time:"30–60 minutes",
description:"Italy's oldest shopping arcade with elegant architecture, cafés and luxury boutiques."
},

{
name:"La Scala",
coords:[45.4670,9.1899],
day:1,
type:"Opera House",
time:"1–2 hours",
description:"One of the world's most celebrated opera houses. Visit the museum or enjoy an evening performance."
},

{
name:"Navigli",
coords:[45.4519,9.1738],
day:1,
type:"Historic Canal District",
time:"2–3 hours",
description:"A lively neighbourhood famous for canals, restaurants and Milan's traditional evening aperitivo."
},

{
name:"Sforza Castle",
coords:[45.4707,9.1798],
day:2,
type:"Castle",
time:"2–3 hours",
description:"A magnificent Renaissance fortress surrounded by Sempione Park and home to several museums."
},

{
name:"Santa Maria delle Grazie",
coords:[45.4659,9.1705],
day:2,
type:"UNESCO Church",
time:"1 hour",
description:"Home to Leonardo da Vinci's masterpiece 'The Last Supper'. Advance booking is highly recommended."
},

{
name:"Florence Cathedral",
coords:[43.7731,11.2560],
day:3,
type:"Cathedral",
time:"1.5–2 hours",
description:"The magnificent Cathedral of Santa Maria del Fiore, crowned by Brunelleschi's famous dome. Climb to the top for breathtaking views across Florence."
},

{
name:"Ponte Vecchio",
coords:[43.7687,11.2531],
day:3,
type:"Historic Bridge",
time:"30–45 minutes",
description:"Florence's iconic medieval bridge, lined with traditional jewellery shops and offering beautiful views of the Arno River."
},

{
name:"Piazzale Michelangelo",
coords:[43.7629,11.2651],
day:3,
type:"Panoramic Viewpoint",
time:"45–60 minutes",
description:"The city's most famous viewpoint. Visit near sunset for unforgettable panoramic views over Florence."
},

{
name:"Uffizi Gallery",
coords:[43.7678,11.2553],
day:4,
type:"Art Museum",
time:"2–4 hours",
description:"One of the world's greatest art museums, featuring masterpieces by Botticelli, Leonardo da Vinci, Michelangelo and Raphael."
},

{
name:"Accademia Gallery",
coords:[43.7761,11.2587],
day:4,
type:"Art Museum",
time:"1–2 hours",
description:"Home to Michelangelo's original statue of David, one of the greatest masterpieces of Renaissance sculpture."
},

// ==========================
// Pisa / Siena
// ==========================

{
name:"Leaning Tower of Pisa",
coords:[43.7230,10.3966],
day:5,
type:"UNESCO Landmark",
time:"1–2 hours",
description:"The world-famous leaning bell tower. Climb the 294 steps for panoramic views over Pisa."
},

{
name:"Piazza dei Miracoli",
coords:[43.7232,10.3968],
day:5,
type:"UNESCO Square",
time:"45–60 minutes",
description:"The spectacular Square of Miracles, home to Pisa's cathedral, baptistery and the Leaning Tower."
},

{
name:"Pisa Cathedral",
coords:[43.7233,10.3959],
day:5,
type:"Cathedral",
time:"30–45 minutes",
description:"A masterpiece of Romanesque architecture with an impressive marble interior."
},

{
name:"Baptistery of Pisa",
coords:[43.7235,10.3962],
day:5,
type:"Historic Monument",
time:"20–30 minutes",
description:"Italy's largest baptistery, famous for its remarkable acoustics and beautiful dome."
},

{
name:"Camposanto Monumentale",
coords:[43.7240,10.3960],
day:5,
type:"Historic Cemetery",
time:"30–45 minutes",
description:"A peaceful cloister decorated with remarkable medieval frescoes."
},

{
name:"Piazza del Campo",
coords:[43.3188,11.3308],
day:5,
type:"Historic Square",
time:"45–60 minutes",
description:"The heart of Siena and one of Italy's most beautiful medieval squares, home to the famous Palio horse race."
},

{
name:"Siena Cathedral",
coords:[43.3176,11.3288],
day:5,
type:"Cathedral",
time:"1–2 hours",
description:"An extraordinary Gothic cathedral featuring striped marble, intricate mosaics and masterpieces by Michelangelo, Donatello and Bernini."
},

{
name:"Torre del Mangia",
coords:[43.3187,11.3310],
day:5,
type:"Tower",
time:"45–60 minutes",
description:"Climb over 400 steps for spectacular views across Siena and the Tuscan countryside."
},

{
name:"Historic Centre of Siena",
coords:[43.3185,11.3304],
day:5,
type:"UNESCO World Heritage Site",
time:"2–3 hours",
description:"Lose yourself among medieval streets, artisan shops and traditional Tuscan cafés."
},

// ==========================
// Rome – Historic Centre
// ==========================

{
name:"Trevi Fountain",
coords:[41.9009,12.4833],
day:6,
type:"Baroque Fountain",
time:"30–45 minutes",
description:"Rome's most famous fountain. Tradition says throwing a coin guarantees your return to the Eternal City."
},

{
name:"Pantheon",
coords:[41.8986,12.4769],
day:6,
type:"Ancient Roman Temple",
time:"45–60 minutes",
description:"Nearly 2,000 years old, the Pantheon is one of the best-preserved monuments of Ancient Rome."
},

{
name:"Piazza Navona",
coords:[41.8992,12.4731],
day:6,
type:"Historic Square",
time:"45–60 minutes",
description:"A lively Baroque piazza filled with fountains, cafés and talented street artists."
},

{
name:"Spanish Steps",
coords:[41.9059,12.4823],
day:6,
type:"Historic Staircase",
time:"30 minutes",
description:"A famous meeting place connecting Piazza di Spagna with the Trinità dei Monti church."
},

// ==========================
// Ancient Rome
// ==========================

{
name:"Colosseum",
coords:[41.8902,12.4922],
day:7,
type:"Ancient Amphitheatre",
time:"2–3 hours",
description:"The world's largest Roman amphitheatre and the iconic symbol of Ancient Rome."
},

{
name:"Roman Forum",
coords:[41.8925,12.4853],
day:7,
type:"Archaeological Site",
time:"1–2 hours",
description:"Walk through the political, religious and commercial heart of the ancient Roman Empire."
},

{
name:"Palatine Hill",
coords:[41.8894,12.4882],
day:7,
type:"Historic Hill",
time:"1–2 hours",
description:"According to legend, Rome was founded here by Romulus. Enjoy outstanding views over the Forum."
},

// ==========================
// Vatican
// ==========================

{
name:"Vatican Museums",
coords:[41.9065,12.4536],
day:8,
type:"Museum",
time:"3–4 hours",
description:"One of the world's greatest museum collections, culminating in Michelangelo's Sistine Chapel."
},

{
name:"Sistine Chapel",
coords:[41.9029,12.4545],
day:8,
type:"Chapel",
time:"30–45 minutes",
description:"Admire Michelangelo's extraordinary ceiling and the magnificent Last Judgment fresco."
},

{
name:"St Peter's Basilica",
coords:[41.9022,12.4539],
day:8,
type:"Basilica",
time:"2 hours",
description:"The largest church in the world. Climb the dome for unforgettable views across Vatican City and Rome."
},

{
name:"Castel Sant'Angelo",
coords:[41.9031,12.4663],
day:8,
type:"Castle",
time:"1–2 hours",
description:"Originally Emperor Hadrian's mausoleum, later transformed into a papal fortress overlooking the River Tiber."
},

// ==========================
// Naples & Pompeii
// ==========================

{
name:"Historic Centre of Naples",
coords:[40.8518,14.2681],
day:10,
type:"UNESCO Historic Centre",
time:"2–3 hours",
description:"Discover lively streets, authentic Neapolitan pizza and centuries of history in the birthplace of pizza."
},

{
name:"Spaccanapoli",
coords:[40.8499,14.2578],
day:10,
type:"Historic Street",
time:"1 hour",
description:"The narrow street that slices through Naples' historic centre, lined with churches, cafés and artisan workshops."
},

{
name:"Pompeii",
coords:[40.7485,14.4869],
day:10,
type:"Archaeological Park",
time:"3–5 hours",
description:"Explore the remarkably preserved Roman city buried by Mount Vesuvius in AD 79."
},

{
name:"Mount Vesuvius",
coords:[40.8214,14.4265],
day:10,
type:"Volcano",
time:"2–3 hours",
description:"One of Europe's most famous volcanoes, offering panoramic views over the Bay of Naples."
}



];

attractions.forEach(place=>{

    let emoji = "📍";

switch (place.type) {

    case "Cathedral":
    case "Church":
    case "UNESCO Church":
    case "Basilica":
    case "Chapel":
        emoji = "⛪";
        break;

    case "Museum":
    case "Art Museum":
        emoji = "🏛";
        break;

    case "Castle":
        emoji = "🏰";
        break;

    case "Bridge":
    case "Historic Bridge":
        emoji = "🌉";
        break;

    case "Panoramic Viewpoint":
    case "Viewpoint":
        emoji = "🌄";
        break;

    case "Historic Square":
    case "UNESCO Square":
        emoji = "🏟️";
        break;

    case "Opera House":
        emoji = "🎭";
        break;

    case "Historic Shopping Gallery":
        emoji = "🛍️";
        break;

    case "Historic Canal District":
        emoji = "🌊";
        break;

    case "Tower":
        emoji = "🗼";
        break;

    case "Ancient Amphitheatre":
        emoji = "🏟️";
        break;

    case "Archaeological Park":
    case "Archaeological Site":
        emoji = "🏺";
        break;

    case "Volcano":
        emoji = "🌋";
        break;

    case "UNESCO Landmark":
    case "Landmark":
        emoji = "📸";
        break;

    case "Airport":
        emoji = "✈️";
        break;

    case "Station":
        emoji = "🚉";
        break;
}

const icon = L.divIcon({
    className: "attraction-marker",
    html: emoji,
    iconSize: [28,28],
    iconAnchor: [14,28]
});

L.marker(place.coords,{
    icon: icon
})
    .addTo(map)
    .bindPopup(`

<h3>📍 ${place.name}</h3>

<strong>${place.type}</strong><br><br>

📅 Day ${place.day}<br>

⏱ ${place.time || "Visit time varies"}<br><br>

${place.description || "A highlight of your Italy Grand Tour."}

`);

});// =====================================
// Italy Grand Tour v2
// =====================================
// Part 4 - Search (Fixed)
// =====================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const text = this.value.trim().toLowerCase();

        if (text === "") return;

        for (const place of attractions) {

            if (place.name.toLowerCase().includes(text)) {

                map.flyTo(place.coords, 15, {
                    duration: 1.5
                });

                L.popup()
                    .setLatLng(place.coords)
                    .setContent(`
                        <strong>${place.name}</strong><br>
                        ${place.type}<br>
                        Day ${place.day}
                    `)
                    .openOn(map);

                break;
            }

        }

    });

}
