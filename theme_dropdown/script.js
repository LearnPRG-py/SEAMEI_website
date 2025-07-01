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
        root.style.setProperty('--bg-color', 'rgb(250, 245, 237)');         // #FAF5ED
        root.style.setProperty('--sec-bg', 'rgb(0, 48, 87)');               // #003057
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');      // #1E96A5
        root.style.setProperty('--sec-accent-color', 'rgb(255, 203, 0)');   // #FFCB00
        root.style.setProperty('--tert-bg', 'rgb(180, 235, 245)');          // #B4EBF5
        root.style.setProperty('--text-color', 'black');
    } else {
        root.style.setProperty('--bg-color', 'rgb(17, 17, 17)');
        root.style.setProperty('--sec-bg', 'rgb(53, 53, 53)');
        root.style.setProperty('--accent-color', 'rgb(30, 150, 165)');      // #1E96A5
        root.style.setProperty('--sec-accent-color', 'rgb(255, 203, 0)');   // #FFCB00
        root.style.setProperty('--tert-bg', 'rgb(0, 47, 82)');              // #002F52
        root.style.setProperty('--text-color', 'rgb(247, 242, 236)');       // #F7F2EC
    }
}



// --bg-color: rgb(250, 245, 237); --sec-bg: rgb(0, 48, 87); --accent-color: rgb(30, 150, 165); --sec-accent-color: rgb(255, 203, 0); --tert-bg: rgb(180, 235, 245); --text-color: black;
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
