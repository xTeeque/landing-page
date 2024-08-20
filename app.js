/* crads blurring button script */

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.card').classList.toggle('blurred');
    });
});

/* testimonation swiping script */

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

/* form script */

document.getElementById('contact-form').addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent the default form submission
			const form = event.target;
			
			fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: {
					'Accept': 'application/json'
				}
			}).then(response => {
				if (response.ok) {
					alert('תודה שפנית אלינו!'); // Popup message
					form.reset(); // Clear the form
				} else {
					alert('אירעה שגיאה, נסה שוב מאוחר יותר.');
				}
			}).catch(error => {
				alert('אירעה שגיאה, נסה שוב מאוחר יותר.');
			});
		});
