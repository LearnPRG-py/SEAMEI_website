// Example JSON (in reality you’d load this from a file or API)
const updatesData = [
    {
        title: "What is OAKMUN?",
        caption: "An Introduction to OAKMUN",
        href: "../media/blog1.html",
        image: "im2.jpeg"
    }
];

const feed = document.getElementById("updates-feed");

updatesData.forEach(update => {
    const card = document.createElement("div");
    card.className = "update-card";

    card.innerHTML = `
    <img src="${update.image}" alt="${update.title}" style="width: 100%; border-radius: 10px; margin-bottom: 0.75rem; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);"> 
    <h3>${update.title}</h3>
    <p>${update.caption}</p>
    <a href="${update.href}" class="read-more" style="color: var(--sec-accent-color)">Read more</a>
  `;

    feed.appendChild(card);
});

