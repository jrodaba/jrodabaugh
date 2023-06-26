document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // You can add more sophisticated handling for form data here, like sending it to your backend or a third-party service.
      const formData = new FormData(contactForm);
      console.log('Form data:', Object.fromEntries(formData));
  
      // Display a thank you message after form submission
      const thankYouMessage = document.createElement('p');
      thankYouMessage.textContent = 'Thank you! Your message has been sent.';
      contactForm.replaceWith(thankYouMessage);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const navLinks = document.querySelectorAll('nav a');
  
    // Form submit handling
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      console.log('Form data:', Object.fromEntries(formData));
  
      const thankYouMessage = document.createElement('p');
      thankYouMessage.textContent = 'Thank you! Your message has been sent.';
      contactForm.replaceWith(thankYouMessage);
    });
  
    // Navigation click handling
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = navLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  