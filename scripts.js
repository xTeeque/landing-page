// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                alert("Thank you! Your message was successfully sent."); // Pop-up message
                form.reset();
            } else {
                alert("Oops! There was a problem with your submission. Please try again."); // Error message
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    // Smooth Scrolling for internal links and buttons
    document.querySelectorAll('a[href^="#"], .cta-button').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href') || this.getAttribute('data-target'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.fade-in');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
