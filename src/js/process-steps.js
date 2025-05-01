document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');

    function showStep(stepNumber) {
        // First, set all content to fade out
        stepContents.forEach(content => {
            // Start the fade out transition
            content.classList.remove('active', 'opacity-100');
            content.classList.add('opacity-0');
        });

        // Deactivate all tabs visually
        stepTabs.forEach(tab => {
            tab.classList.remove('active', 'bg-white/20'); 
            tab.classList.add('bg-white/10');
        });

        // Activate the selected tab visually immediately
        const activeTab = document.getElementById(`step${stepNumber}-tab`);
        if (activeTab) {
            activeTab.classList.add('active', 'bg-white/20');
            activeTab.classList.remove('bg-white/10');
        }

        // Use a small delay before showing the new content for a smoother transition
        setTimeout(() => {
            // Now fade in the selected content
            const selectedContent = document.getElementById(`step${stepNumber}-content`);
            if (selectedContent) {
                selectedContent.classList.add('active', 'opacity-100');
                selectedContent.classList.remove('opacity-0');
            }
        }, 300); // Delay of 300ms allows for a nice transition
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        const stepNumber = index + 1; // Assuming steps are 1-based
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Initialize all content elements with enhanced transition classes
    stepContents.forEach((content, index) => {
        // Set longer duration for smoother animation
        content.classList.add('transition-opacity', 'duration-500', 'ease-in-out');
        content.style.transitionProperty = 'opacity, transform';
        content.style.transitionDuration = '500ms';
        content.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Add a slight fade and slide effect
        if (index === 0) {
            content.classList.add('active', 'opacity-100');
            content.style.transform = 'translateY(0)';
            content.classList.remove('opacity-0');
        } else {
            content.classList.remove('active', 'opacity-100');
            content.classList.add('opacity-0');
            content.style.transform = 'translateY(10px)';
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