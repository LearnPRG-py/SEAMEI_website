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


// window.addEventListener('scroll', function () {
//     const scrollY = window.scrollY;
//     const vh = window.innerHeight;
//     const aspect = window.innerWidth / window.innerHeight;
//     console.log(`Scroll Y: ${scrollY}, Viewport Height: ${vh}, Aspect Ratio: ${aspect}`);
//     let spacer2 = document.getElementById('spacer2');
//     const contentSection = document.querySelector('.content');
//     let stage1End, stage2End;
//     const rect = contentSection.getBoundingClientRect();
//     const contentTop = rect.top + window.scrollY;
//     stage1End = 0.3 * contentTop;
//     stage2End = 0.5 * contentTop;


//     let firstBg = document.getElementById('first-bg-image');
//     if (!firstBg) {
//         firstBg = document.createElement('div');
//         firstBg.id = 'first-bg-image';
//         document.body.insertBefore(firstBg, document.body.firstChild);
//     }

//     // Opacity and saturation
//     let opacity = 0.2;
//     let saturation = 0.2;
//     if (scrollY < stage1End) {
//         const t = scrollY / stage1End;
//         opacity = 0.2 + t * (0.7 - 0.2);
//         saturation = opacity;
//     } else {
//         opacity = 0.7;
//         saturation = 0.7;
//     }
//     let scale = 1;
//     if (scrollY > stage1End && scrollY < stage2End) {
//         const t = (scrollY - stage1End) / (stage2End - stage1End);
//         scale = 1 - 0.2 * t;
//     } else if (scrollY >= stage2End) {
//         scale = 0.8;
//     }

//     if (scrollY < stage2End) {
//         firstBg.style.position = 'fixed';
//         firstBg.style.top = '0';
//         firstBg.style.left = '0';
//     } else {
//         firstBg.style.position = 'absolute';
//         firstBg.style.top = stage2End + 'px';
//         firstBg.style.left = '0';
//     }
//     firstBg.style.width = '100vw';
//     firstBg.style.height = '100vh';
//     firstBg.style.zIndex = '-2';
//     firstBg.style.background = "url('coolbgimage.jpg') center center/cover no-repeat";
//     firstBg.style.backgroundAttachment = 'fixed';
//     firstBg.style.opacity = opacity;
//     firstBg.style.filter = `saturate(${saturation})`;
//     firstBg.style.transform = `scale(${scale})`;
//     firstBg.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)';
//     firstBg.style.pointerEvents = 'none';
//     firstBg.style.overflow = 'hidden';
// });
(function () {
  function updateCountdown() {
    const target = new Date('2025-09-05T00:00:00');
    const now = new Date();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    const secs = Math.floor(diff / 1000);
    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = hours;
    document.getElementById('cd-mins').textContent = mins;
    document.getElementById('cd-secs').textContent = secs;
  }
  if (document.getElementById('countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
})();

const canvas = document.getElementById('canvas'); // your canvas id
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
for (let i = 0; i < 100; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25,
    color: 'rgba(92, 198, 255, 0.7)'
  });
}

let bgParticlesArray = [];
for (let i = 0; i < 50; i++) {
  bgParticlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 4,
    speedX: Math.random() * 0.1 - 0.05,
    speedY: Math.random() * 0.1 - 0.05,
    color: 'rgba(0, 238, 255, 0.4)'
  });
}

function drawParticles(arr) {
  arr.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
    if (p.y > canvas.height || p.y < 0) p.speedY *= -1;
  });
}

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawParticles(bgParticlesArray);
  drawParticles(particlesArray);

  requestAnimationFrame(handleParticles);
}

function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);
handleParticles();