// Handle Netlify form submissions with in-page confirmation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Create a hidden confirmation message that will be shown after submission
    const formContainer = contactForm.parentNode;
    const confirmationMessage = document.createElement('div');
    confirmationMessage.id = 'form-confirmation';
    confirmationMessage.className = 'bg-white p-8 rounded-lg shadow-lg hidden';
    confirmationMessage.innerHTML = `
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Vielen Dank für Ihre Nachricht!</h3>
        <p class="text-gray-600 mb-6">Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
        <button id="send-another" class="inline-block bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Neue Anfrage senden
        </button>
      </div>
    `;
    
    formContainer.appendChild(confirmationMessage);
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Submit the form data using fetch API
      const formData = new FormData(contactForm);
      
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        if (response.ok) {
          // Show confirmation message
          contactForm.classList.add('hidden');
          const confirmation = document.getElementById('form-confirmation');
          confirmation.classList.remove('hidden');
          
          // Track form submission as an event (for future Google Ads integration)
          // This creates a trackable event even without Google Ads configured yet
          if (window.gtag) {
            gtag('event', 'form_submission', {
              'event_category': 'Contact',
              'event_label': 'Contact Form Submission',
              'value': 1
            });
          } else {
            console.log('Form submission tracking ready (gtag not loaded yet)');
          }
          
          // Reset form for future submissions
          contactForm.reset();
        } else {
          console.error('Form submission error:', response);
          alert('Es gab ein Problem bei der Übermittlung Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.');
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        alert('Es gab ein Problem bei der Übermittlung Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.');
      });
    });
    
    // Handle "Send another message" button click
    document.getElementById('send-another').addEventListener('click', function() {
      document.getElementById('form-confirmation').classList.add('hidden');
      contactForm.classList.remove('hidden');
    });
  }
}); 