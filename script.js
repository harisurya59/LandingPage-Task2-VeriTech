// Function to handle registration button click
function register() {
    alert("Thank you for your interest! Registration will be available soon.");
}

// Function to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Getting form values
    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const message = event.target.elements[2].value;

    // Displaying an alert with form data (you can replace this with an actual form submission logic)
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);

    // Resetting the form
    event.target.reset();
});
