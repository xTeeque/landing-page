// script.js

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
document.querySelectorAll('input[name="contact-method"]').forEach(function(elem) {
    elem.addEventListener('change', function(event) {
        if (event.target.value === 'email') {
            document.getElementById('email-input').style.display = 'block';
            document.getElementById('phone-input').style.display = 'none';
            document.getElementById('phone-input').removeAttribute('required');
            document.getElementById('email-input').setAttribute('required', 'required');
        } else {
            document.getElementById('phone-input').style.display = 'block';
            document.getElementById('email-input').style.display = 'none';
            document.getElementById('email-input').removeAttribute('required');
            document.getElementById('phone-input').setAttribute('required', 'required');
        }
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission behavior
    var form = event.target;
    var formData = new FormData(form);

    fetch('https://formspree.io/f/xdkndrlr', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            showPopup('ההודעה שלך נשלחה בהצלחה!');
            form.reset(); // Clear the form
        } else {
            showPopup('אופס! הייתה בעיה בשליחת ההודעה שלך.');
        }
    }).catch(function(error) {
        showPopup('אופס! הייתה בעיה בשליחת ההודעה שלך.');
    });
});

function showPopup(message) {
    document.getElementById('popup-text').innerText = message;
    document.getElementById('popup-message').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-message').style.display = 'none';
}
