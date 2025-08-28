// Example JSON (in reality you’d load this from a file or API)
const updatesData = [
    {
        title: "Opening Ceremony",
        caption: "The MUN has officially started with inspiring speeches!",
        time: "2h ago",
        image: "https://via.placeholder.com/800x400"
    },
    {
        title: "Security Council Debate",
        caption: "Delegates debate fiercely on nuclear disarmament.",
        time: "3h ago",
        image: "https://via.placeholder.com/800x400"
    },
    {
        title: "General Assembly",
        caption: "Resolutions on climate change are being voted upon.",
        time: "5h ago",
        image: "https://via.placeholder.com/800x400"
    }
];

const feed = document.getElementById("updates-feed");

updatesData.forEach(update => {
    const card = document.createElement("div");
    card.className = "update-card";

    card.innerHTML = `
    <img src="${update.image}" alt="${update.title}">
    <h3>${update.title}</h3>
    <p>${update.caption}</p>
    <span class="time">${update.time}</span>
  `;

    feed.appendChild(card);
});

