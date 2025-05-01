/**
 * Main JavaScript file for 24ja.at website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Contact form validation and submission
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                highlightInvalidField(nameInput);
                isValid = false;
            } else {
                resetField(nameInput);
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                highlightInvalidField(emailInput);
                isValid = false;
            } else {
                resetField(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                highlightInvalidField(messageInput);
                isValid = false;
            } else {
                resetField(messageInput);
            }
            
            if (isValid) {
                // For now, just show a success message
                // In a real implementation, this would be replaced with actual form submission
                showFormMessage('Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.');
                contactForm.reset();
            }
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize Slideshows
    initSlideshow('slideshow-kinderbetreuung', 4000); // 4 second interval
    initSlideshow('slideshow-begleitung', 4000);      // 4 second interval
    initSlideshow('slideshow-personenbetreuung', 4000); // 4 second interval
});

// Slideshow Function
function initSlideshow(containerId, intervalTime) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Slideshow container with ID ${containerId} not found.`);
        return;
    }

    const images = container.querySelectorAll('.slideshow-image');
    if (images.length <= 1) {
        console.log(`Slideshow ${containerId} only has one image, not starting.`);
        return; // No need for slideshow with 0 or 1 image
    }

    let currentImageIndex = 0;

    // Ensure initial state is correct (first image visible and on top)
    images.forEach((img, index) => {
        if (index === currentImageIndex) {
            img.classList.remove('opacity-0', 'z-0');
            img.classList.add('opacity-100', 'z-10');
        } else {
            img.classList.remove('opacity-100', 'z-10');
            img.classList.add('opacity-0', 'z-0');
        }
    });

    setInterval(() => {
        // Hide current image and send to back
        images[currentImageIndex].classList.remove('opacity-100', 'z-10');
        images[currentImageIndex].classList.add('opacity-0', 'z-0');

        // Calculate next index
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Show next image and bring to front
        images[currentImageIndex].classList.remove('opacity-0', 'z-0');
        images[currentImageIndex].classList.add('opacity-100', 'z-10');

    }, intervalTime);
}

// Expose the function globally
window.initSlideshow = initSlideshow;

// Helper functions for form validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function highlightInvalidField(field) {
    field.classList.add('border-red-500');
    field.classList.add('bg-red-50');
    
    // Add error message if it doesn't exist
    const fieldId = field.id;
    const errorMessageId = `${fieldId}-error`;
    
    if (!document.getElementById(errorMessageId)) {
        const errorMessage = document.createElement('p');
        errorMessage.id = errorMessageId;
        errorMessage.className = 'text-red-500 text-sm mt-1';
        
        if (fieldId === 'email' && field.value.trim() && !isValidEmail(field.value)) {
            errorMessage.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        } else {
            errorMessage.textContent = 'Dieses Feld ist erforderlich.';
        }
        
        field.parentNode.appendChild(errorMessage);
    }
}

function resetField(field) {
    field.classList.remove('border-red-500');
    field.classList.remove('bg-red-50');
    
    // Remove error message if it exists
    const errorMessageId = `${field.id}-error`;
    const errorMessage = document.getElementById(errorMessageId);
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showFormMessage(message) {
    const contactForm = document.querySelector('#contact form');
    const formContainer = contactForm.parentNode;
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-100 border border-brand-green text-brand-green px-4 py-3 rounded relative mb-6';
    successMessage.role = 'alert';
    successMessage.innerHTML = `
        <span class="block sm:inline">${message}</span>
    `;
    
    // Insert before the form
    formContainer.insertBefore(successMessage, contactForm);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
} 