// Testimonials slider functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get testimonial container
  const testimonialContainer = document.getElementById('testimonial-container');
  if (!testimonialContainer) return;
  
  const slides = testimonialContainer.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  // Pre-calculate heights once at the beginning and store them
  const slideHeights = Array.from(slides).map(slide => slide.offsetHeight + 30); // Adding buffer
  
  // Animation timing values from CSS
  const totalSlides = slides.length;
  const totalCycleTime = 18; // seconds - matches the CSS animation
  const slideTime = totalCycleTime / totalSlides;
  
  // Keep track of current slide and upcoming slide
  let currentSlideIndex = 0;
  let nextSlideIndex = 0;
  
  // Initial setup
  slides[0].style.opacity = 1;
  slides[0].style.zIndex = 10;
  testimonialContainer.style.height = `${slideHeights[0]}px`;
  
  // Apply styles directly instead of relying on CSS animations
  slides.forEach((slide, index) => {
    // Override CSS animations
    slide.style.animation = 'none';
    if (index !== 0) {
      slide.style.opacity = 0;
      slide.style.zIndex = 0;
    }
  });
  
  // Function to transition to the next slide
  function transitionToSlide(nextIndex) {
    if (nextIndex === currentSlideIndex) return;
    
    // Get current and next slides
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[nextIndex];
    
    // Prepare next slide to fade in
    nextSlide.style.zIndex = 10;
    currentSlide.style.zIndex = 5;
    
    // Change height at the same time as starting the fade
    testimonialContainer.style.height = `${slideHeights[nextIndex]}px`;
    
    // Start fade out of current slide
    currentSlide.style.opacity = 0;
    
    // Start fade in of next slide
    nextSlide.style.opacity = 1;
    
    // Update current index
    currentSlideIndex = nextIndex;
  }
  
  // Function to cycle through slides
  function cycleSlides() {
    nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
    transitionToSlide(nextSlideIndex);
  }
  
  // Set interval to cycle slides at slide time interval
  const slideDuration = slideTime * 1000; // Convert to milliseconds
  setInterval(cycleSlides, slideDuration);
  
  // Handle window resize events - recalculate all heights
  window.addEventListener('resize', function() {
    // Debounce the resize to avoid excessive calculations
    clearTimeout(window.testimonialResizeTimer);
    window.testimonialResizeTimer = setTimeout(function() {
      // Re-measure all slides
      for (let i = 0; i < slides.length; i++) {
        slideHeights[i] = slides[i].offsetHeight + 30;
      }
      
      // Update the current slide's height
      testimonialContainer.style.height = `${slideHeights[currentSlideIndex]}px`;
    }, 250);
  });
}); 