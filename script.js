const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text', {origin: 'top'});
sr.reveal('.about-img, .service-item, .about-text', {origin: 'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2',{origin: 'top'});
sr.reveal('.left-contact', {origin: 'left'});
sr.reveal('.right-contact', {origin: 'right'});
sr.reveal('.end-section', {origin: 'top'});
sr.reveal('.form', {origin: 'bottom'});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    function changeActiveLink() {
        let currentSectionIndex = sections.length;

        while (--currentSectionIndex && window.scrollY + window.innerHeight / 2 < sections[currentSectionIndex].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentSectionIndex].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});
