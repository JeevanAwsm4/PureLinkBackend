// Menu Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Menu Icon Navbar When Click Navbar Link (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Dark Light Mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.age-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.age-img img, .Infections-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.age-content h1, .Weight-img img', { origin: 'left' });

ScrollReveal().reveal('.age-content h1, .Infections-img img', { origin: 'left' });

ScrollReveal().reveal('.age-content h3, .age-content p, .Weight-content', { origin: 'right' });
