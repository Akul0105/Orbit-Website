// FlickeringGrid background (Magic UI style)
(function initFlickeringGrid() {
    const canvas = document.getElementById('flickering-grid');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const squareSize = 4;
    const gridGap = 6;
    const cellSize = squareSize + gridGap;
    const color = '#6B7280';
    const maxOpacity = 0.5;
    const flickerChance = 0.1;
    const gridSize = 800;

    let cols = 0, rows = 0;
    const opacities = [];

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);
        cols = Math.ceil(rect.width / cellSize) + 1;
        rows = Math.ceil(rect.height / cellSize) + 1;
        while (opacities.length < cols * rows) {
            opacities.push(Math.random() * maxOpacity);
        }
    }

    function draw() {
        const w = canvas.getBoundingClientRect().width;
        const h = canvas.getBoundingClientRect().height;
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (Math.random() < flickerChance) {
                    opacities[i * cols + j] = Math.random() * maxOpacity;
                }
                const opacity = opacities[i * cols + j];
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity;
                ctx.fillRect(j * cellSize, i * cellSize, squareSize, squareSize);
            }
        }
        ctx.globalAlpha = 1;
    }

    let raf;
    function loop() {
        draw();
        raf = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener('resize', () => {
        resize();
    });
})();

// Icon cloud — 3D sphere: bigger, all icons visible, CDN with fallback color
(function initIconCloud() {
    const slugs = [
        'typescript', 'javascript', 'react', 'nextdotjs', 'nodedotjs', 'html5', 'css3', 'flutter', 'dart',
        'android', 'java', 'express', 'prisma', 'amazonaws', 'postgresql', 'firebase', 'docker', 'git',
        'github', 'gitlab', 'vercel', 'figma', 'jest', 'cypress', 'nginx', 'visualstudiocode'
    ];
    const sphere = document.getElementById('hero-icon-cloud-sphere');
    if (!sphere) return;

    const R = 155;
    const size = 40;
    const iconColor = '64748b';

    const rings = [
        { phi: -38, count: 8 },
        { phi: 0, count: 10 },
        { phi: 38, count: 8 }
    ];
    let idx = 0;

    rings.forEach((ring) => {
        for (let k = 0; k < ring.count && idx < slugs.length; k++) {
            const slug = slugs[idx++];
            const theta = (k / ring.count) * 360 + (ring.phi !== 0 ? 18 : 0);

            const img = document.createElement('img');
            img.alt = slug;
            img.loading = 'lazy';
            img.src = `https://cdn.simpleicons.org/${slug}/${iconColor}`;
            img.onerror = function () {
                this.src = `https://cdn.simpleicons.org/${slug}/6366f1`;
            };

            const t = `rotateY(${theta}deg) rotateX(${ring.phi}deg) translateZ(${R}px) rotateX(${-ring.phi}deg) rotateY(${-theta}deg)`;
            img.style.transform = t;
            img.style.width = size + 'px';
            img.style.height = size + 'px';
            img.style.marginLeft = -size / 2 + 'px';
            img.style.marginTop = -size / 2 + 'px';
            sphere.appendChild(img);
        }
    });
})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 400);
    });
}

// Nav bar style on scroll
const nav = document.querySelector('.nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.pageYOffset > 50);
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sent ✓';
        submitBtn.disabled = true;
        contactForm.reset();
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Fade-in on scroll for services and steps
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

