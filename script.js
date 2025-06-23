document.addEventListener('DOMContentLoaded', () => {

    const countdownDate = new Date("October 26, 2025 09:00:00").getTime();

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

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const resetPoint = carousel.scrollWidth / 2;

    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            lazyScrollingContainer.scrollLeft += scrollSpeed;
            scrollPosition += scrollSpeed;

            if (scrollPosition >= resetPoint) {
                lazyScrollingContainer.scrollLeft = 0;
                scrollPosition = 0;
            }

        }, 16);
    };
    lazyScrollingContainer.addEventListener("mouseenter", () => {
        clearInterval(scrollInterval);
    });

    lazyScrollingContainer.addEventListener("mouseleave", () => {
        startAutoScroll();
    });



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
const navbar = document.getElementById('navbar');
const sentinel = document.getElementById('sentinel');

new IntersectionObserver(
    ([e]) => {
        if (!e.isIntersecting) {
            navbar.classList.add('dock');
        } else {
            navbar.classList.remove('dock');
        }
    },
    { root: null, threshold: 0 }
).observe(sentinel);



function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, val] = cookie.split('=');
        return key === name ? decodeURIComponent(val) : acc;
    }, '');
}

function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#FAF5ED');
        root.style.setProperty('--sec-bg', '#003057');
        root.style.setProperty('--accent-color', '#1E96A5');
        root.style.setProperty('--sec-accent-color', '#FFCB00');
        root.style.setProperty('--tert-bg', '#B4EBF5');
        root.style.setProperty('--text-color', 'black');
    } else {
        root.style.setProperty('--bg-color', 'rgb(0, 0, 0)');
        root.style.setProperty('--sec-bg', 'rgb(53, 53, 53)');
        root.style.setProperty('--accent-color', '#1E96A5');
        root.style.setProperty('--sec-accent-color', '#FFCB00');
        root.style.setProperty('--tert-bg', '#002F52');
        root.style.setProperty('--text-color', '#F7F2EC');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme') || 'dark';
    applyTheme(savedTheme);

    const dropdown = document.getElementById('theme-toggle');
    if (dropdown) {
        dropdown.value = savedTheme;

        dropdown.addEventListener('change', () => {
            const selectedTheme = dropdown.value;
            applyTheme(selectedTheme);
            setCookie('theme', selectedTheme, 30);
        });
    }
});
