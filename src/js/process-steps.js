document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');
    
    // Track the currently active step
    let activeStepNumber = 1;
    let isAnimating = false;

    // Add basic fade transition to all content elements immediately
    stepContents.forEach(content => {
        content.style.transition = 'opacity 200ms ease';
    });

    function showStep(stepNumber) {
        // Don't do anything if clicking the already active step or if animation is in progress
        if (stepNumber === activeStepNumber || isAnimating) return;
        isAnimating = true;
        
        // Update active step tracker
        const previousStepNumber = activeStepNumber;
        activeStepNumber = stepNumber;
        
        // Get relevant elements
        const previousContent = document.getElementById(`step${previousStepNumber}-content`);
        const newContent = document.getElementById(`step${stepNumber}-content`);
        
        if (!previousContent || !newContent) {
            isAnimating = false;
            return;
        }
        
        // Update tab styling
        stepTabs.forEach(tab => {
            tab.classList.remove('active', 'bg-white/20');
            tab.classList.add('bg-white/10');
        });
        
        const activeTab = document.getElementById(`step${stepNumber}-tab`);
        if (activeTab) {
            activeTab.classList.add('active', 'bg-white/20');
            activeTab.classList.remove('bg-white/10');
        }
        
        // Super simple approach - just fade between contents quickly with no height animation
        // 1. Fade out current content
        previousContent.style.opacity = '0';
        
        // 2. After fade out is complete, swap contents quickly
        setTimeout(() => {
            // Hide old content and show new content simultaneously to avoid layout shift
            previousContent.style.display = 'none';
            newContent.style.display = 'block';
            
            // Force reflow
            void newContent.offsetWidth;
            
            // Fade in new content
            newContent.style.opacity = '1';
            
            // Animation complete
            setTimeout(() => {
                isAnimating = false;
            }, 200);
        }, 200);
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        const stepNumber = index + 1;
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Initialize content state
    stepContents.forEach((content, index) => {
        if (index === 0) {
            content.style.opacity = '1';
            content.style.display = 'block';
        } else {
            content.style.opacity = '0';
            content.style.display = 'none';
        }
    });

    // Set initial active tab styling
    const firstTab = document.getElementById('step1-tab');
    if (firstTab) {
        firstTab.classList.add('active', 'bg-white/20');
        firstTab.classList.remove('bg-white/10');
    }
}); 