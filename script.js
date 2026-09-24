// Mark that JS is running so reveal animations only hide content when they can be shown again
document.documentElement.classList.add('js');

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-links');
const navLinks = navList.querySelectorAll('a');

/* ---------- Mobile menu ---------- */

function setMenu(open) {
    navList.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    menuToggle.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
}

menuToggle.addEventListener('click', () => {
    setMenu(!navList.classList.contains('open'));
});

navLinks.forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
});

document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) setMenu(false);
});

/* ---------- Navbar shadow on scroll ---------- */

function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ---------- Highlight the current section in the nav ---------- */

const sections = document.querySelectorAll('main section[id]');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

/* ---------- Reveal elements on scroll ---------- */

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Screenshot lightbox ---------- */

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
const shots = Array.from(document.querySelectorAll('.shot'));
let currentShot = 0;
let lastFocused = null;

function showShot(index) {
    currentShot = (index + shots.length) % shots.length;
    const img = shots[currentShot].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = shots[currentShot].nextElementSibling.textContent;
}

function openLightbox(index) {
    lastFocused = document.activeElement;
    showShot(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
}

shots.forEach((shot, i) => {
    shot.addEventListener('click', () => openLightbox(i));
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.prev').addEventListener('click', () => showShot(currentShot - 1));
lightbox.querySelector('.next').addEventListener('click', () => showShot(currentShot + 1));

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showShot(currentShot - 1);
    if (e.key === 'ArrowRight') showShot(currentShot + 1);
});

/* ---------- Age and footer year stay up to date ---------- */

const birthday = new Date(2001, 2, 28); // 2001-03-28 (month is 0-based)
const today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
const hadBirthday =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
if (!hadBirthday) age--;

document.getElementById('age').textContent = age;
document.getElementById('year').textContent = today.getFullYear();
