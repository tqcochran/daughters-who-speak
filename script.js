// You can add interactive features here like form handling or animations
console.log("Daughter Who Speak site loaded.");

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const nav = document.querySelector('#nav-links');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Form Validation
document.querySelector('#contact-form').addEventListener('submit', function(e) {
    let valid = true;
    this.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '';
        }
    });
    if (!valid) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Daughters Who Speak site is loaded!");
});



