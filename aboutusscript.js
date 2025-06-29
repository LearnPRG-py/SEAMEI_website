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

document.getElementById("theme-toggle").addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value == "dark"){
        document.documentElement.style.setProperty('--bg-color', 'rgb(17, 17, 17)');
        document.documentElement.style.setProperty('--sec-bg', 'rgb(53, 53, 53)');
        document.documentElement.style.setProperty('--ppl-list-color', 'rgb(53, 53, 53)');
        document.documentElement.style.setProperty('--accent-color', '#1e96a5');
        document.documentElement.style.setProperty('--sec-accent-color', '#ffcb00');
        document.documentElement.style.setProperty('--tert-bg', '#002f52');
        document.documentElement.style.setProperty('--text-color', '#f7f2ec');
        document.documentElement.style.setProperty('--contact-us-color', '#1e96a5');

    } 
    else if (e.target.value == "light"){
        document.documentElement.style.setProperty('--bg-color', '#f7f2ec');
        document.documentElement.style.setProperty('--sec-bg', '#002f52');
        document.documentElement.style.setProperty('--ppl-list-color', '#f7f2ec');
        document.documentElement.style.setProperty('--accent-color', '#1e96a5');
        document.documentElement.style.setProperty('--sec-accent-color', '#1e96a5');
        document.documentElement.style.setProperty('--tert-bg', '#002f52');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--contact-us-color', '#ffcb00');
    }
});