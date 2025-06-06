// Handle Netlify form submissions with in-page confirmation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Create a hidden confirmation message that will be shown after submission
    const formContainer = contactForm.parentNode;
    const confirmationMessage = document.createElement('div');
    confirmationMessage.id = 'form-confirmation';
    confirmationMessage.className = 'bg-white p-8 rounded-lg shadow-lg hidden';
    
    // Use createElement approach instead of innerHTML for better security
    const messageDiv = document.createElement('div');
    messageDiv.className = 'text-center';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6';
    
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('class', 'w-8 h-8 text-green-600');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('stroke', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
    iconPath.setAttribute('stroke-width', '2');
    iconPath.setAttribute('d', 'M5 13l4 4L19 7');
    
    iconSvg.appendChild(iconPath);
    iconDiv.appendChild(iconSvg);
    
    const heading = document.createElement('h3');
    heading.className = 'text-xl font-bold text-gray-800 mb-4 font-heading';
    heading.textContent = 'Vielen Dank für Ihre Nachricht!';
    
    const paragraph = document.createElement('p');
    paragraph.className = 'text-gray-600 mb-6';
    paragraph.textContent = 'Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.';
    
    const button = document.createElement('button');
    button.id = 'send-another';
    button.className = 'inline-block bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-6 rounded-lg transition-colors';
    button.textContent = 'Neue Anfrage senden';
    
    messageDiv.appendChild(iconDiv);
    messageDiv.appendChild(heading);
    messageDiv.appendChild(paragraph);
    messageDiv.appendChild(button);
    confirmationMessage.appendChild(messageDiv);
    
    formContainer.appendChild(confirmationMessage);
    
    // Input validation patterns
    const validationPatterns = {
      email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      name: /^[a-zA-ZäöüÄÖÜß\s]{2,50}$/,
      // Austrian phone number pattern: supports +43, 0043, or leading 0 formats
      phone: /^(\+43|0043|0)[1-9]\d{1,13}$|^(\+43|0043)\s?[1-9](\d[\s\-]?){1,13}\d$|^0[1-9](\d[\s\-]?){1,13}\d$/
    };
    
    // Validate form inputs
    function validateForm() {
      let isValid = true;
      
      // Validate name field
      const nameInput = document.getElementById('name');
      if (!validationPatterns.name.test(nameInput.value)) {
        markInvalid(nameInput, 'Bitte geben Sie einen gültigen Namen ein (2-50 Zeichen, nur Buchstaben)');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      // Validate email field
      const emailInput = document.getElementById('email');
      if (!validationPatterns.email.test(emailInput.value)) {
        markInvalid(emailInput, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      // Validate phone field (optional)
      const phoneInput = document.getElementById('phone');
      if (phoneInput && phoneInput.value.trim() !== '') {
        // Clean phone number for validation (remove spaces and hyphens)
        const cleanPhone = phoneInput.value.replace(/[\s\-]/g, '');
        if (!validationPatterns.phone.test(cleanPhone)) {
          markInvalid(phoneInput, 'Bitte geben Sie eine gültige österreichische Telefonnummer ein (z.B. 0664 1234567 oder +43 664 1234567)');
          isValid = false;
        } else {
          markValid(phoneInput);
        }
      } else if (phoneInput) {
        markValid(phoneInput);
      }
      
      // Check if service is selected
      const serviceInputs = document.querySelectorAll('input[name="service"]');
      let serviceSelected = false;
      serviceInputs.forEach(input => {
        if (input.checked) {
          serviceSelected = true;
        }
      });
      
      if (!serviceSelected) {
        const serviceContainer = document.querySelector('input[name="service"]').parentNode.parentNode.parentNode;
        serviceContainer.classList.add('border', 'border-red-500', 'rounded', 'p-2');
        isValid = false;
      } else {
        const serviceContainer = document.querySelector('input[name="service"]').parentNode.parentNode.parentNode;
        serviceContainer.classList.remove('border', 'border-red-500', 'rounded', 'p-2');
      }
      
      // Validate message field
      const messageInput = document.getElementById('message');
      if (messageInput.value.trim().length < 10) {
        markInvalid(messageInput, 'Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein');
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      return isValid;
    }
    
    // Mark an input as invalid with a custom message
    function markInvalid(input, message) {
      input.classList.add('border-red-500');
      input.classList.remove('border-gray-300');
      
      // Check if error message already exists
      let errorElement = input.parentNode.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.className = 'error-message text-red-500 text-sm mt-1';
        input.parentNode.appendChild(errorElement);
      }
      errorElement.textContent = message;
    }
    
    // Mark an input as valid
    function markValid(input) {
      input.classList.remove('border-red-500');
      input.classList.add('border-gray-300');
      
      // Remove error message if it exists
      const errorElement = input.parentNode.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
    }
    
    // Sanitize user input to prevent XSS attacks
    function sanitizeInput(input) {
      const tempDiv = document.createElement('div');
      tempDiv.textContent = input;
      return tempDiv.textContent;
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form before submission
      if (!validateForm()) {
        return; // Stop submission if validation fails
      }
      
      // Submit the form data using fetch API
      const formData = new FormData(contactForm);
      
      // Sanitize user inputs
      const sanitizedFormData = new FormData();
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          sanitizedFormData.append(key, sanitizeInput(value));
        } else {
          sanitizedFormData.append(key, value);
        }
      }
      
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(sanitizedFormData).toString()
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