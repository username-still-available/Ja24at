document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');

    function showStep(stepNumber) {
        // First, set all content to fade out and move down
        stepContents.forEach(content => {
            // Start the fade out transition
            content.classList.remove('active', 'opacity-100');
            content.classList.add('opacity-0');
            content.style.transform = 'translateY(20px)';
            content.style.pointerEvents = 'none'; // Prevent interaction during animation
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
            // Now fade in the selected content and move it up
            const selectedContent = document.getElementById(`step${stepNumber}-content`);
            if (selectedContent) {
                selectedContent.classList.add('active', 'opacity-100');
                selectedContent.classList.remove('opacity-0');
                selectedContent.style.transform = 'translateY(0)';
                selectedContent.style.pointerEvents = 'auto'; // Re-enable interaction
            }
        }, 300); // Delay of 300ms allows for a nice transition
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        const stepNumber = index + 1; // Assuming steps are 1-based
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Set up initial styles for animation
    stepContents.forEach((content, index) => {
        // Apply base styles for transitions
        content.style.position = 'absolute';
        content.style.width = '100%';
        content.style.transitionProperty = 'opacity, transform';
        content.style.transitionDuration = '400ms';
        content.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';

        // Initialize positions and visibility
        if (index === 0) {
            content.classList.add('active', 'opacity-100');
            content.style.transform = 'translateY(0)';
            content.style.zIndex = '1';
            content.style.pointerEvents = 'auto';
        } else {
            content.classList.add('opacity-0');
            content.classList.remove('active', 'opacity-100');
            content.style.transform = 'translateY(20px)';
            content.style.zIndex = '0';
            content.style.pointerEvents = 'none';
        }
    });

    // Create a container with proper height
    const firstContent = document.querySelector('.process-content');
    if (firstContent && firstContent.parentNode) {
        const container = firstContent.parentNode;
        container.style.position = 'relative';
        container.style.minHeight = `${firstContent.offsetHeight + 40}px`; // Add some extra space
    }

    // Initialize the first tab as active
    const firstTab = document.getElementById('step1-tab');
    if (firstTab) {
        firstTab.classList.add('active', 'bg-white/20');
        firstTab.classList.remove('bg-white/10');
    } else {
        console.error("Initial process step tab (step1-tab) not found.");
    }
}); 