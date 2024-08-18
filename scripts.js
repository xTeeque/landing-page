// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Send form data using Fetch API to Formspree
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Show the popup on successful submission
                popup.style.display = 'flex';
                // Optionally, reset the form fields
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form.');
        });
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
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

    // Scroll to Top Button Visibility
    const toggleScrollToTopButton = () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    };

    window.addEventListener('scroll', toggleScrollToTopButton);
    toggleScrollToTopButton(); // Initial check

    // Scroll to Top Button Action
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
