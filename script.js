document.addEventListener('DOMContentLoaded', () => {

    const countdownDate = new Date("September 19, 2025 09:00:00").getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(updateCountdown);
            document.getElementById("countdown-timer").innerHTML = "EVENT HAS BEGUN!";
        }
    }, 1000);
    const lazyScrollingContainer = document.querySelector('.lazy-scrolling-container');
    const carousel = lazyScrollingContainer.querySelector('.carousel');

    carousel.innerHTML += carousel.innerHTML;

    const scrollSpeed = 1;
    let scrollInterval;

    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            lazyScrollingContainer.scrollLeft += scrollSpeed;
            if (lazyScrollingContainer.scrollLeft >= carousel.scrollWidth / 2) {
                lazyScrollingContainer.scrollLeft = 0;
            }
        }, 16);
    }


    startAutoScroll();



});

const circle1 = document.getElementById('bubble-1');
const circle2 = document.getElementById('bubble-2');
const circle3 = document.getElementById('bubble-3');
const initialTop1 = parseFloat(getComputedStyle(circle1).top);
const initialTop2 = parseFloat(getComputedStyle(circle2).top);
const initialTop3 = parseFloat(getComputedStyle(circle3).top);
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let delay = 0;
function animate() {
    const bobAmount = 10;
    const bobSpeed = 0.040;

    const offsetY1 = Math.sin(angle1) * bobAmount;
    circle1.style.top = `${initialTop1 + offsetY1}px`;
    angle1 += bobSpeed;
    if (delay >= 0.3) {
        const offsetY2 = Math.sin(angle2) * bobAmount;
        circle2.style.top = `${initialTop2 + offsetY2}px`;
        angle2 += bobSpeed;
    }
    if (delay >= 0.6) {
        const offsetY3 = Math.sin(angle3) * bobAmount;
        circle3.style.top = `${initialTop3 + offsetY3}px`;
        angle3 += bobSpeed;
    }
    delay += bobSpeed;
    requestAnimationFrame(animate);
}

animate();

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
const heroContainer = document.getElementById("updates-hero");

// Grab only the first update
const firstUpdate = updatesData[0];

if (firstUpdate) {
  const heroCard = document.createElement("div");
  heroCard.className = "update-card";

  heroCard.innerHTML = `
    <img src="${"/update_page/"+firstUpdate.image}" alt="${firstUpdate.title}" 
         style="width: 100%; border-radius: 10px; margin-bottom: 0.75rem; 
         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);"> 
    <h3>${firstUpdate.title}</h3>
    <p>${firstUpdate.caption}</p>
    <span class="time">${firstUpdate.time}</span>
  `;

  heroContainer.appendChild(heroCard);
}
