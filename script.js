// Mark that JS is running so reveal animations only hide content when they can be shown again
document.documentElement.classList.add('js');

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-links');
const navLinks = navList.querySelectorAll('a');

/* ---------- Logo scramble ---------- */

const logo = navbar.querySelector('.logo');
const logoLetters = logo.querySelectorAll('span');
const scrambleChars = '!<>-_\\/[]{}=+*^?#$%&@01';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let scrambling = false;

logoLetters.forEach(span => {
    span.dataset.char = span.textContent;
});

function scrambleLogo() {
    if (scrambling || reduceMotion.matches) return;
    scrambling = true;

    const start = performance.now();
    let lastSwap = 0;

    const tick = now => {
        const elapsed = now - start;
        // Swap random characters every 50ms so the flicker stays readable
        const swap = now - lastSwap > 50;
        if (swap) lastSwap = now;

        let done = true;
        logoLetters.forEach((span, i) => {
            // Letters lock in left to right
            if (elapsed >= 500 + i * 250) {
                span.textContent = span.dataset.char;
                span.classList.remove('scrambling');
            } else {
                done = false;
                span.classList.add('scrambling');
                if (swap) span.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            }
        });

        if (done) scrambling = false;
        else requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}

scrambleLogo();
logo.addEventListener('mouseenter', scrambleLogo);

/* ---------- Mobile menu ---------- */

function setMenu(open) {
    navList.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? t('menuClose') : t('menuOpen'));
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
        // Once faded in, drop the reveal classes so the element's own hover transform/transitions apply again
        setTimeout(() => entry.target.classList.remove('reveal', 'visible'), reduceMotion.matches ? 0 : 700);
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

/* ---------- Copy email address ---------- */

const copyBtn = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let copyTimer;

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copyBtn.dataset.email);
        copyStatus.textContent = t('copied');
        copyBtn.classList.add('copied');
        copyBtn.querySelector('i').className = 'fas fa-check';
    } catch {
        copyStatus.textContent = t('copyFailed');
    }

    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
        copyStatus.textContent = '';
        copyBtn.classList.remove('copied');
        copyBtn.querySelector('i').className = 'far fa-copy';
    }, 2000);
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

/* ---------- Language switch (JA / EN) ---------- */

// Japanese is written in index.html; English comes from EN_TEXT / UI_STRINGS in i18n.js
const langSwitch = document.getElementById('lang-switch');
let currentLang = 'ja';
const jaTitle = document.title;

function t(key) {
    return UI_STRINGS[currentLang][key];
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? EN_TEXT['page.title'] : jaTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        // Remember the Japanese the first time so we can switch back
        if (el.dataset.ja === undefined) el.dataset.ja = el.innerHTML;
        const en = EN_TEXT[el.dataset.i18n];
        el.innerHTML = lang === 'en' && en !== undefined ? en : el.dataset.ja;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const [attr, key] = el.dataset.i18nAttr.split(':');
        if (el.dataset.jaAttr === undefined) el.dataset.jaAttr = el.getAttribute(attr);
        const en = EN_TEXT[key];
        el.setAttribute(attr, lang === 'en' && en !== undefined ? en : el.dataset.jaAttr);
    });

    // The button always shows the language you can switch TO
    langSwitch.querySelector('span').textContent = lang === 'ja' ? 'EN' : 'JA';
    langSwitch.setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替える');

    // The intro text was replaced, so put the age back; refresh the menu button label too
    document.getElementById('age').textContent = age;
    setMenu(navList.classList.contains('open'));

    try {
        localStorage.setItem('lang', lang);
    } catch {}
}

langSwitch.addEventListener('click', () => {
    setLanguage(currentLang === 'ja' ? 'en' : 'ja');
});

let savedLang = null;
try {
    savedLang = localStorage.getItem('lang');
} catch {}
if (savedLang === 'en') setLanguage('en');
