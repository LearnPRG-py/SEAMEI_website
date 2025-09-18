// Example JSON (in reality you’d load this from a file or API)
const updatesData = [
    {
        title: "Humanitarian Diplomacy in a Polarised World: HRC at OakMUN 2025",
        caption: "Navigating Challenges, Fostering Cooperation",
        href: "../media/blog6.html",
        image: "hrc.jpg"
    },
    {
        title: "Decoding the Future: ECOSOC’s Bold Dive into Cryptocurrency Regulation",
        caption: "The Vision: Adapt, Think Bigger, Think Forward",
        href: "../media/blog5.html",
        image: "fin.jpg"
    },
    {
        title: "Leading OakMUN 2025 — Secretary General Soumyajit Sur Roy",
        caption: "Giving Voice to the Unheard",
        href: "../media/blog4.html",
        image: "im2.jpeg"
    },
    {
        title: "OAKMUN: An Insider Account of Greatness - Rishita Borah",
        caption: "An Insider's Perspective on OAKMUN",
        href: "../media/blog3.html",
        image: "b1.jpg"
    },
    {
        title: "Inside OAKMUN 2025 with Director General Akshat Gupta",
        caption: "A Deep Dive into OAKMUN 2025",
        href: "../media/blog2.html",
        image: "b2.jpg"
    },
    {
        title: "What is OAKMUN?",
        caption: "An Introduction to OAKMUN",
        href: "../media/blog1.html",
        image: "im4.jpeg"
    },
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

