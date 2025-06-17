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

//////////////////////

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const aspect = window.innerWidth / window.innerHeight;
    console.log(`Scroll Y: ${scrollY}, Viewport Height: ${vh}, Aspect Ratio: ${aspect}`);
    let spacer2 = document.getElementById('spacer2');
    const contentSection = document.querySelector('.content');
    let stage1End, stage2End;
    const rect = contentSection.getBoundingClientRect();
    const contentTop = rect.top + window.scrollY;
    stage1End = 0.3 * contentTop;
    stage2End = 0.5 * contentTop;


    let firstBg = document.getElementById('first-bg-image');
    if (!firstBg) {
        firstBg = document.createElement('div');
        firstBg.id = 'first-bg-image';
        document.body.insertBefore(firstBg, document.body.firstChild);
    }

    // Opacity and saturation
    let opacity = 0.7;
    let saturation = 0.7;
    // Zoom
    let scale = 1;
    if (scrollY > stage1End && scrollY < stage2End) {
        const t = (scrollY - stage1End) / (stage2End - stage1End);
        scale = 1 - 0.2 * t;
    } else if (scrollY >= stage2End) {
        scale = 0.8;
    }

    if (scrollY < stage2End) {
        firstBg.style.position = 'fixed';
        firstBg.style.top = '0';
        firstBg.style.left = '0';
    } else {
        firstBg.style.position = 'absolute';
        firstBg.style.top = stage2End + 'px';
        firstBg.style.left = '0';
    }
    firstBg.style.width = '100vw';
    firstBg.style.height = '100vh';
    firstBg.style.zIndex = '-2';
    firstBg.style.background = "url('coolbgimage.jpg') center center/cover no-repeat";
    firstBg.style.backgroundAttachment = 'fixed';
    firstBg.style.opacity = opacity;
    firstBg.style.filter = `saturate(${saturation})`;
    firstBg.style.transform = `scale(${scale})`;
    firstBg.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)';
    firstBg.style.pointerEvents = 'none';
    firstBg.style.overflow = 'hidden';
});
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