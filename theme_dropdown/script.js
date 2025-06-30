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
        root.style.setProperty('--bg-color', 'rgb(17, 17, 17)');
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
