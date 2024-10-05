const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button visibility
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Adding hover interaction for project cards
const projectCards = document.querySelectorAll('.row');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent form from submitting
        alert('Please fill in all fields.');
    }
});

// Lazy loading images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: 50, delay: 0.5, duration: 1 });
gsap.from('.hero .social', { opacity: 0, scale: 0.8, delay: 1, duration: 1 });

gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-img', {
   scrollTrigger: '.about',
   opacity: 0,
   x: -100,
   duration: 1
});

gsap.from('.about-text', {
   scrollTrigger: '.about',
   opacity: 0,
   x: 100,
   duration: 1
});
