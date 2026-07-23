const itineraryBox = document.getElementById("itinerary");
const buttons = document.querySelectorAll(".timeline button");

function showDay(dayNumber){

    const day = itinerary.find(d => d.day === dayNumber);

    if(!day) return;

    itineraryBox.innerHTML = `
        <h2>Day ${day.day} – ${day.city}</h2>
        <h3>${day.title}</h3>

        <ul>
            ${day.attractions.map(place => `
                <li>
                    <strong>${place.name}</strong><br>
                    ${place.type}
                </li>
            `).join("")}
        </ul>
    `;

    map.flyTo(day.coordinates, 12,{
        duration:1.5
    });

}

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        showDay(Number(button.dataset.day));

    });

});

// Show Day 1 automatically
showDay(1);