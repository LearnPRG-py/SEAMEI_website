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


function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, val] = cookie.split('=');
        return key === name ? decodeURIComponent(val) : acc;
    }, '');
}

function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === 'light') {
        root.style.setProperty('--bg-color', 'rgb(247, 242, 236)');       // #f7f2ec
        root.style.setProperty('--sec-bg', 'rgb(0, 47, 82)');             // #002f52
        root.style.setProperty('--ppl-list-color', 'rgb(247, 242, 236)'); // #f7f2ec
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');    // #1e96a5
        root.style.setProperty('--sec-accent-color', 'rgb(30, 150, 165)'); // #1e96a5
        root.style.setProperty('--tert-bg', 'rgb(0, 47, 82)');            // #002f52
        root.style.setProperty('--text-color', 'rgb(0, 0, 0)');           // #000
        root.style.setProperty('--contact-us-color', 'rgb(255, 203, 0)'); // #ffcb00
        root.style.setProperty('--section-dark', 'rgb(240, 236, 230)');   // #f0ece6
        root.style.setProperty('--section-highlight-dark', 'rgb(224, 224, 224)'); // #e0e0e0
    } else {
        root.style.setProperty('--bg-color', 'rgb(17, 17, 17)');
        root.style.setProperty('--sec-bg', 'rgb(53, 53, 53)');
        root.style.setProperty('--ppl-list-color', 'rgb(53, 53, 53)');
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');     // #1e96a5
        root.style.setProperty('--sec-accent-color', 'rgb(255, 203, 0)');  // #ffcb00
        root.style.setProperty('--tert-bg', 'rgb(0, 47, 82)');             // #002f52
        root.style.setProperty('--text-color', 'rgb(247, 242, 236)');      // #f7f2ec
        root.style.setProperty('--contact-us-color', 'rgb(30, 150, 165)'); // #1e96a5
        root.style.setProperty('--section-dark', 'rgb(31, 31, 31)');
        root.style.setProperty('--section-highlight-dark', 'rgb(43, 43, 43)');
    }
}
``

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


const startTime = new Date("2025-07-11T24:00:00").getTime();

const countdownEnd = startTime + (
    (12 * 24 * 60 * 60 * 1000) + // 12 days
    (11 * 60 * 60 * 1000) +     // 11 hours
    (10 * 60 * 1000) +          // 10 minutes
    (9 * 1000)                  // 9 seconds
);

const countdownEl = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEnd - now;

    if (distance <= 0) {
        countdownEl.innerHTML = "🔥 The Committees Are Live 🔥";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.innerHTML =
        `${days}d  : ${hours}h : ${minutes}m : ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
