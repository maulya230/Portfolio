function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function handleFormSubmission() {
  // Get form input values
  const name = document.querySelector('.form-control-lg').value;
  const email = document.querySelector('input[type="email"]').value;
  const subject = document.querySelector('input[type="text"]').value;
  const projectDetails = document.querySelector('textarea').value;

  // Perform any desired form validation here

  // Display a simple alert with the form data (replace with your submission logic)
  alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nProject Details: ${projectDetails}`);

  // Optionally, you can reset the form after submission
  document.querySelector('form').reset();
}

// Attach the event listener to the form's submit event
document.querySelector('form').addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Handle the form submission
  handleFormSubmission();
});

// Optionally, you can also attach the form submission to your "Contact Me" button
document.querySelector('.btn-success').addEventListener('click', handleFormSubmission);

// Add the 'active' class to each span with a delay
document.addEventListener('DOMContentLoaded', function() {
  const spans = document.querySelectorAll('.title span');
  
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add('active');
    }, (index + 1) * 100); // Adjust the delay as needed
  });
});

