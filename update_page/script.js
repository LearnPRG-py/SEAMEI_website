// Example JSON (in reality you’d load this from a file or API)
const updatesData = [
    {
        title: "EBs for Commitees have been revealed!",
        caption: "View EB information on our social media or the committee pages.",
        time: "September 10th, 2025",
        image: "im6.png"
    },
    {
        title: "Early bird registrations closes today!",
        caption: "Sign up now to save money before normal registrations open!",
        time: "August 28th, 2025",
        image: "im3.jpeg"
    },
    {
        title: "Conference details out!",
        caption: "View the conference details page to understand schedule, arrangements and more!",
        time: "August 20th, 2025",
        image: "im4.jpeg"
    },
    {
        title: "Early bird registrations are now open!",
        caption: "Sign up now to secure your spot NOW! Don't miss out!",
        time: "August 20th, 2025",
        image: "im3.jpeg"
    },
    {
        title: "HCC Committee Updated!",
        caption: "New Agenda for the HCC committee, pertaining to the 6 day war.",
        time: "August 11th, 2025",
        image: "im5.jpeg"
    },
    {
        title: "Committees released and website up!",
        caption: "New committees have been released and the website is now live.",
        time: "July 31st, 2025",
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
    <span class="time">${update.time}</span>
  `;

    feed.appendChild(card);
});
