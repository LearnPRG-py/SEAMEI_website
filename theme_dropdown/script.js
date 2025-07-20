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
        root.style.setProperty('--bg-color', 'rgb(250, 245, 237)');
        root.style.setProperty('--sec-bg', 'rgb(0, 48, 87)');
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');
        root.style.setProperty('--sec-accent-color', 'rgb(255, 203, 0)');
        root.style.setProperty('--tert-bg', 'rgb(180, 235, 245)');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--cl-color', 'rgb(0, 48, 87)');
        root.style.setProperty('--fadeneeded', true);
        root.style.setProperty('--dark', false);
    } else {
        root.style.setProperty('--bg-color', 'rgb(17, 17, 17)');
        root.style.setProperty('--sec-bg', 'rgb(53, 53, 53)');
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');
        root.style.setProperty('--sec-accent-color', 'rgb(255, 203, 0)');
        root.style.setProperty('--tert-bg', 'rgb(0, 47, 82)');
        root.style.setProperty('--text-color', 'rgb(247, 242, 236)');
        root.style.setProperty('--cl-color', 'rgb(250, 245, 237)');
        root.style.setProperty('--fadeneeded', false);
        root.style.setProperty('--dark', true);
    }

    // update button icon if needed
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'light' ? '☀️' : '🌙';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = getCookie('theme') || 'dark';
    applyTheme(currentTheme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            setCookie('theme', currentTheme, 30);
        });
    }
});
