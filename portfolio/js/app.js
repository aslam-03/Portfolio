// Scroll to Top Button Functionality
window.onscroll = function() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    // Reveal sections on scroll
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var sectionPos = section.getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            section.classList.add('show');
        }
    });
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form Validation and Email Sending
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Prepare the email parameters
        var templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                document.getElementById('contactForm').reset(); // Reset form after successful submission
            }, function(error) {
                console.log('FAILED...', error);
                alert('Oops! Something went wrong. Please try again.');
            });
    }
});
