// Testimonials slider functionality with manual navigation
document.addEventListener('DOMContentLoaded', function() {
  // Get testimonial container
  const testimonialContainer = document.getElementById('testimonial-container');
  if (!testimonialContainer) return;
  
  const slides = testimonialContainer.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  // Get navigation elements
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');
  
  const HEIGHT_BUFFER = 30;
  const getSlideHeight = (index) => {
    if (index < 0 || index >= slides.length) return 0;
    return slides[index].offsetHeight + HEIGHT_BUFFER;
  };
  
  // Keep track of current slide
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  
  // Initial setup
  slides[0].style.opacity = 1;
  slides[0].style.zIndex = 10;
  testimonialContainer.style.height = `${getSlideHeight(0)}px`;
  
  // Apply styles directly instead of relying on CSS animations
  slides.forEach((slide, index) => {
    // Override CSS animations
    slide.style.animation = 'none';
    slide.style.transition = 'opacity 0.5s ease-in-out';
    if (index !== 0) {
      slide.style.opacity = 0;
      slide.style.zIndex = 0;
    }
  });
  
  // Create navigation dots
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `w-3 h-3 rounded-full transition-all duration-200 ${
        i === 0 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
      }`;
      dot.setAttribute('data-slide', i);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }
  
  // Update dots active state
  function updateDots() {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.className = 'w-3 h-3 rounded-full transition-all duration-200 bg-blue-600';
      } else {
        dot.className = 'w-3 h-3 rounded-full transition-all duration-200 bg-gray-300 hover:bg-gray-400';
      }
    });
  }
  
  // Function to transition to a specific slide
  function goToSlide(nextIndex) {
    if (nextIndex === currentSlideIndex || nextIndex < 0 || nextIndex >= totalSlides) return;
    
    // Get current and next slides
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[nextIndex];
    
    // Prepare next slide to fade in
    nextSlide.style.zIndex = 10;
    currentSlide.style.zIndex = 5;
    
    // Change height with smooth transition
    testimonialContainer.style.transition = 'height 0.5s ease-in-out';
    testimonialContainer.style.height = `${getSlideHeight(nextIndex)}px`;
    
    // Start fade out of current slide
    currentSlide.style.opacity = 0;
    
    // Start fade in of next slide
    nextSlide.style.opacity = 1;
    
    // Update current index
    currentSlideIndex = nextIndex;
    
    // Update dots
    updateDots();
  }
  
  // Navigation functions
  function goToPrevSlide() {
    const prevIndex = currentSlideIndex === 0 ? totalSlides - 1 : currentSlideIndex - 1;
    goToSlide(prevIndex);
  }
  
  function goToNextSlide() {
    const nextIndex = (currentSlideIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }
  
  // Add event listeners for navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', goToPrevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', goToNextSlide);
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  });
  
  // Initialize dots
  createDots();
  
  // Handle window resize events - recalculate all heights
  window.addEventListener('resize', function() {
    // Debounce the resize to avoid excessive calculations
    clearTimeout(window.testimonialResizeTimer);
    window.testimonialResizeTimer = setTimeout(function() {
      testimonialContainer.style.height = `${getSlideHeight(currentSlideIndex)}px`;
    }, 250);
  });

  window.addEventListener('load', function() {
    testimonialContainer.style.height = `${getSlideHeight(currentSlideIndex)}px`;
  });
}); 