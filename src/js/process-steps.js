document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');
    
    // Track the currently active step
    let activeStepNumber = 1;
    
    // Set up the container for content
    const contentContainer = document.querySelector('.process-content').parentNode;
    if (contentContainer) {
        contentContainer.style.position = 'relative';
        contentContainer.style.overflow = 'hidden'; // Prevent content overflow during transitions
    }

    function showStep(stepNumber) {
        // Don't do anything if clicking the already active step
        if (stepNumber === activeStepNumber) return;
        
        // Update active step tracker
        const previousStepNumber = activeStepNumber;
        activeStepNumber = stepNumber;
        
        // Get both previous and new content elements
        const previousContent = document.getElementById(`step${previousStepNumber}-content`);
        const newContent = document.getElementById(`step${stepNumber}-content`);
        
        if (!previousContent || !newContent) return;
        
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
        
        // 1. First fade out the previous content
        previousContent.style.opacity = '0';
        previousContent.style.transform = 'translateY(10px)';
        
        // 2. After fade-out is complete, hide previous and prepare new content
        setTimeout(() => {
            // Hide previous content completely
            previousContent.style.display = 'none';
            
            // Prepare new content (visible but transparent)
            newContent.style.display = 'block';
            newContent.style.opacity = '0';
            newContent.style.transform = 'translateY(-10px)';
            
            // 3. Force a reflow to ensure display changes are processed
            void newContent.offsetWidth;
            
            // 4. Now fade in the new content
            setTimeout(() => {
                newContent.style.opacity = '1';
                newContent.style.transform = 'translateY(0)';
            }, 50); // Small delay to ensure previous changes have rendered
            
        }, 300); // Wait for previous content to fade out completely
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        const stepNumber = index + 1;
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Initialize all content with proper transition styles
    stepContents.forEach((content, index) => {
        // Set transition properties
        content.style.transition = 'opacity 250ms ease-out, transform 250ms ease-out';
        
        // Initialize state
        if (index === 0) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
            content.style.display = 'block';
        } else {
            content.style.opacity = '0';
            content.style.transform = 'translateY(-10px)';
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