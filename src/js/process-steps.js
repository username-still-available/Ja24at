document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');
    
    // Set up the container first to prevent layout jumps
    const contentContainer = document.querySelector('.process-content').parentNode;
    if (contentContainer) {
        contentContainer.style.position = 'relative';
        // Don't set a fixed height, let it grow naturally with content
    }

    function showStep(stepNumber) {
        // Identify the content to show
        const selectedContent = document.getElementById(`step${stepNumber}-content`);
        if (!selectedContent) return;
        
        // Hide all content with fade out first
        stepContents.forEach(content => {
            if (content === selectedContent) return; // Skip the target content
            
            // Fade out non-target content 
            content.style.opacity = '0';
            content.style.transform = 'translateY(10px)';
            
            // After fade out, hide completely
            setTimeout(() => {
                content.style.display = 'none';
            }, 300);
        });

        // Deactivate all tabs visually
        stepTabs.forEach(tab => {
            tab.classList.remove('active', 'bg-white/20'); 
            tab.classList.add('bg-white/10');
        });

        // Activate the selected tab visually
        const activeTab = document.getElementById(`step${stepNumber}-tab`);
        if (activeTab) {
            activeTab.classList.add('active', 'bg-white/20');
            activeTab.classList.remove('bg-white/10');
        }

        // Show the selected content with animation
        // Make sure it's displayed first before animating
        selectedContent.style.display = 'block';
        
        // Force a browser reflow to ensure the display change is processed
        // before starting the animation
        void selectedContent.offsetWidth;
        
        // Now fade and slide in
        selectedContent.style.opacity = '1';
        selectedContent.style.transform = 'translateY(0)';
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        const stepNumber = index + 1; // Assuming steps are 1-based
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Initialize all content elements with basic styles for animation
    stepContents.forEach((content, index) => {
        // Apply proper transition properties
        content.style.transition = 'opacity 300ms ease-in-out, transform 300ms ease-in-out';
        
        // Initialize state
        if (index === 0) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
            content.style.display = 'block';
        } else {
            content.style.opacity = '0';
            content.style.transform = 'translateY(10px)';
            content.style.display = 'none';
        }
    });

    // Initialize the first tab as active
    const firstTab = document.getElementById('step1-tab');
    if (firstTab) {
        firstTab.classList.add('active', 'bg-white/20');
        firstTab.classList.remove('bg-white/10');
    } else {
        console.error("Initial process step tab (step1-tab) not found.");
    }
}); 