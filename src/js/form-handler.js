// Handle Netlify form submissions with in-page confirmation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Input validation patterns
    const validationPatterns = {
      email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      name: /^[a-zA-ZäöüÄÖÜßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\s\-'.]{2,50}$/,
      // Austrian phone number pattern: supports +43, 0043, or leading 0 formats
      phone: /^(\+43|0043|0)[1-9]\d{1,13}$|^(\+43|0043)\s?[1-9](\d[\s\-]?){1,13}\d$|^0[1-9](\d[\s\-]?){1,13}\d$/
    };

    // Validation error messages
    const errorMessages = {
      required: 'Dieses Feld ist erforderlich.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      name: 'Bitte geben Sie einen gültigen Namen ein (2-50 Zeichen).',
      phone: 'Bitte geben Sie eine gültige österreichische Telefonnummer ein.',
      message: 'Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.',
      service: 'Bitte wählen Sie mindestens eine Dienstleistung aus.'
    };

    // Helper functions for validation UI
    function markInvalid(input, message) {
      input.classList.add('border-red-500', 'bg-red-50');
      input.classList.remove('border-green-500', 'bg-green-50');
      
      // Remove existing error message
      const existingError = input.parentNode.querySelector('.error-message');
      if (existingError) {
        existingError.remove();
      }
      
      // Add new error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message text-red-600 text-sm mt-1';
      errorDiv.textContent = message;
      input.parentNode.appendChild(errorDiv);
    }

    function markValid(input) {
      input.classList.add('border-green-500', 'bg-green-50');
      input.classList.remove('border-red-500', 'bg-red-50');
      
      // Remove error message
      const existingError = input.parentNode.querySelector('.error-message');
      if (existingError) {
        existingError.remove();
      }
    }

    function validateForm() {
      let isValid = true;
      
      // Validate name field
      const nameInput = document.getElementById('name');
      if (!validationPatterns.name.test(nameInput.value)) {
        markInvalid(nameInput, 'Bitte geben Sie einen gültigen Namen ein (2-50 Zeichen)');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      // Validate email field
      const emailInput = document.getElementById('email');
      if (!validationPatterns.email.test(emailInput.value)) {
        markInvalid(emailInput, errorMessages.email);
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      // Validate phone field (optional)
      const phoneInput = document.getElementById('phone');
      if (phoneInput.value && !validationPatterns.phone.test(phoneInput.value)) {
        markInvalid(phoneInput, errorMessages.phone);
        isValid = false;
      } else if (phoneInput.value) {
        markValid(phoneInput);
      }
      
      // Validate message field
      const messageInput = document.getElementById('message');
      if (!messageInput.value || messageInput.value.length < 10) {
        markInvalid(messageInput, errorMessages.message);
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      // Validate service selection (at least one checkbox must be checked)
      const serviceInputs = document.querySelectorAll('input[name="service[]"]');
      const serviceSelected = Array.from(serviceInputs).some(input => input.checked);
      
      if (!serviceSelected) {
        const serviceContainer = document.querySelector('input[name="service[]"]').parentNode.parentNode.parentNode;
        serviceContainer.classList.add('border-red-500', 'bg-red-50', 'rounded', 'p-3');
        
        // Remove existing error message
        const existingError = serviceContainer.querySelector('.error-message');
        if (existingError) {
          existingError.remove();
        }
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-600 text-sm mt-2';
        errorDiv.textContent = errorMessages.service;
        serviceContainer.appendChild(errorDiv);
        
        isValid = false;
      } else {
        const serviceContainer = document.querySelector('input[name="service[]"]').parentNode.parentNode.parentNode;
        serviceContainer.classList.remove('border-red-500', 'bg-red-50');
        serviceContainer.classList.add('border-green-500', 'bg-green-50');
        
        // Remove error message
        const existingError = serviceContainer.querySelector('.error-message');
        if (existingError) {
          existingError.remove();
        }
      }
      
      return isValid;
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
      
      // IMPORTANT: For checkbox arrays, we need to manually handle the service[] field
      // Remove all service[] entries and add only the checked ones
      formData.delete('service[]');
      const checkedServices = document.querySelectorAll('input[name="service[]"]:checked');
      checkedServices.forEach(checkbox => {
        formData.append('service[]', checkbox.value);
      });
      
      // Sanitize user input
      const sanitizedData = new FormData();
      for (let [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          // Basic sanitization - remove script tags and other potentially harmful content
          const sanitizedValue = value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, '')
            .trim();
          sanitizedData.append(key, sanitizedValue);
        } else {
          sanitizedData.append(key, value);
        }
      }
      
      // Convert to URLSearchParams for proper encoding
      const urlParams = new URLSearchParams();
      for (let [key, value] of sanitizedData.entries()) {
        urlParams.append(key, value);
      }
      
      // Submit to Netlify
      fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlParams.toString()
      })
      .then(response => {
        if (response.ok || response.redirected) {
          // Success
          contactForm.reset();
          showSuccessMessage();
          
          // Clear any validation styling
          const inputs = contactForm.querySelectorAll('input, textarea');
          inputs.forEach(input => {
            input.classList.remove('border-red-500', 'bg-red-50', 'border-green-500', 'bg-green-50');
          });
          
          // Clear any error messages
          const errorMessages = contactForm.querySelectorAll('.error-message');
          errorMessages.forEach(msg => msg.remove());
          
          // Clear service container styling
          const serviceContainer = document.querySelector('input[name="service[]"]').parentNode.parentNode.parentNode;
          serviceContainer.classList.remove('border-red-500', 'bg-red-50', 'border-green-500', 'bg-green-50');
          
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showErrorMessage();
      });
    });

    function showSuccessMessage() {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
      
      // Create success message container
      const successDiv = document.createElement('div');
      successDiv.className = 'bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center transform scale-95 transition-transform duration-300';
      successDiv.innerHTML = `
        <div class="mb-4">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 font-heading">Nachricht gesendet!</h3>
          <p class="text-gray-600 mb-6">Vielen Dank für Ihre Anfrage. Ich werde mich innerhalb von 24 Stunden bei Ihnen melden.</p>
          <button class="bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-6 rounded-lg transition-colors" onclick="this.closest('.fixed').remove()">
            Verstanden
          </button>
        </div>
      `;
      
      overlay.appendChild(successDiv);
      document.body.appendChild(overlay);
      
      // Animate in
      setTimeout(() => {
        successDiv.classList.remove('scale-95');
        successDiv.classList.add('scale-100');
      }, 100);
      
      // Auto-close after 10 seconds
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.remove();
        }
      }, 10000);
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    }

    function showErrorMessage() {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
      
      // Create error message container
      const errorDiv = document.createElement('div');
      errorDiv.className = 'bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center transform scale-95 transition-transform duration-300';
      errorDiv.innerHTML = `
        <div class="mb-4">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 font-heading">Fehler beim Senden</h3>
          <p class="text-gray-600 mb-6">Entschuldigung, es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors" onclick="this.closest('.fixed').remove()">
              Verstanden
            </button>
            <a href="tel:06641272764" class="bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Anrufen: 0664 127 2764
            </a>
          </div>
        </div>
      `;
      
      overlay.appendChild(errorDiv);
      document.body.appendChild(overlay);
      
      // Animate in
      setTimeout(() => {
        errorDiv.classList.remove('scale-95');
        errorDiv.classList.add('scale-100');
      }, 100);
      
      // Auto-close after 15 seconds (longer for error messages)
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.remove();
        }
      }, 15000);
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    }
  }
});