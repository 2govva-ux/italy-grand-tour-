const buttons = document.querySelectorAll(".timeline button");
const itineraryBox = document.getElementById("itinerary");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const dayNumber = Number(button.dataset.day);

        const day = itinerary.find(item => item.day === dayNumber);

        if (!day) return;

        itineraryBox.innerHTML = `
            <h2>Day ${day.day} – ${day.city}</h2>
            <h3>${day.title}</h3>

            <ul>
                ${day.activities.map(a => `<li>${a}</li>`).join("")}
            </ul>
        `;

        map.setView(day.coordinates, 12);

    });

});
