window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const stage1End = 0.5 * vh; 
    const stage2End = 1.2 * vh; 
    const stage3Start = stage2End; 
    //will probably add a stage 3 later
    // const stage3End = 2.5 * vh;

    let firstBg = document.getElementById('first-bg-image');
    if (!firstBg) {
        firstBg = document.createElement('div');
        firstBg.id = 'first-bg-image';
        document.body.insertBefore(firstBg, document.body.firstChild);
    }

    //increase opacity and saturation
    let opacity = 0.2;
    let saturation = 0.2;
    if (scrollY < stage1End) {
        const t = scrollY / stage1End;
        opacity = 0.2 + t * (0.7 - 0.2);
        saturation = opacity;
    } else {
        opacity = 0.7;
        saturation = 0.7;
    }

    // zoom
    let scale = 1;
    if (scrollY > stage1End && scrollY < stage2End) {
        const t = (scrollY - stage1End) / (stage2End - stage1End);
        scale = 1 - 0.2 * t; // from 1 to 0.8
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