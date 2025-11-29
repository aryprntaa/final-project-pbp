// ==========================================
// FET - Food Expiry Tracker
// Landing Page JavaScript (FIXED VERSION)
// ==========================================

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    initNavbar();
    initBackToTop();
    initCounters();
    initSmoothScroll();
    initParallax();
});

// === NAVBAR SCROLL EFFECT ===
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}

// === BACK TO TOP BUTTON ===
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        btn.classList.toggle('show', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === ANIMATED COUNTERS ===
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let hasRun = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                hasRun = true;
                counters.forEach(c => animateCounter(c));
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const update = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    };

    update();
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#") return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

// === PARALLAX ===
function initParallax() {
    const floatingCards = document.querySelectorAll('.floating-card');
    const phoneMockup = document.querySelector('.phone-mockup');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        floatingCards.forEach((card, i) => {
            const speed = 0.3 + (i * 0.1);
            card.style.transform = `translateY(${scrolled * speed}px)`;
        });

        if (phoneMockup) {
            phoneMockup.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.0002})`;
            phoneMockup.style.opacity = 1 - (scrolled * 0.002);
        }
    });
}

// === FEATURE CARDS HOVER ===
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = (y - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
        });
    });
});

// === TIMELINE EFFECT ===
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all 0.8s ease";
        observer.observe(item);
    });
});

// === GRADIENT TEXT ===
document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.gradient-text');

    if (text) {
        let hue = 120;
        setInterval(() => {
            hue = (hue + 1) % 360;
            const hue2 = (hue + 30) % 360;

            text.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${hue2}, 70%, 60%))`;
            text.style.webkitBackgroundClip = 'text';
            text.style.color = 'transparent';
        }, 50);
    }
});

// === FLOATING CARDS ===
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.floating-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const randomRotate = (Math.random() - 0.5) * 10;
            card.style.transform = `translateY(-15px) rotate(${randomRotate}deg)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = `translateY(0) rotate(0deg)`;
        });
    });
});

// === BUTTON RIPPLE ===
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-hero, .btn-cta');

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);

            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');

            btn.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// === LAZY LOAD IMAGES ===
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute('data-src');
                obs.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => io.observe(img));
});

// === ACTIVE NAV LINK ===
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// === PRELOADER ===
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});
