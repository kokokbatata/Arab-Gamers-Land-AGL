// Smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In Effect when the page loads
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

// Add a simple fade-in class for the body element when the page loads
document.body.classList.add('fade-in');

// Add a smooth scroll effect to navigation menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        // Add smooth transition
        document.body.style.transition = "transform 0.5s ease-in-out";
    });
});

// For any section that appears on scroll, trigger a fade-in effect
const fadeInOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);

// On DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initially hide the preloader and set opacity of body to 0
    document.querySelector('.preloader').style.display = "flex"; // Make sure preloader is visible
    document.body.style.opacity = 0; // Set body opacity to 0

    // Set a small timeout for loading (adjust the duration based on your needs)
    setTimeout(function () {
        // Hide preloader
        document.querySelector('.preloader').style.display = "none"; // Hide preloader

        // Fade-in the body content and hero section
        document.body.style.opacity = 1; // Set body opacity to 1 to make it visible
        document.body.classList.add("fade-in"); // Ensure body fades in

        // Delay the visibility of the hero section
        setTimeout(function () {
            document.querySelector('.hero').classList.add('visible');
        }, 300); // Small delay for smooth transition
    }, 1500); // Adjust this delay based on how long the preloader should stay visible
});
