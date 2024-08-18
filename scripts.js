// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('popupModal');
    const closeBtn = document.querySelector('.close');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                modal.style.display = 'block'; // Show the pop-up modal
                form.reset(); // Optionally reset the form
            } else {
                alert("Oops! There was a problem with your submission. Please try again."); // Error message
            }
        }).catch(error => {
            alert("Oops! There was an error submitting the form. Please try again later."); // Catch any network errors
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
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
