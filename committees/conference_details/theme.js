const toggle = document.getElementById('themeToggle');
const root   = document.documentElement;

function setIcon() {
  toggle.textContent = root.classList.contains('dark') ? '🌙' : '☀️';
}
toggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  root.classList.toggle('light');
  setIcon();
});
setIcon();   // initial
