document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');

    function showStep(stepNumber) {
        // Hide all content sections using opacity
        stepContents.forEach(content => {
            content.classList.remove('active', 'opacity-100');
            content.classList.add('opacity-0'); // ONLY toggle opacity
        });

        // Deactivate all tabs visually
        stepTabs.forEach(tab => {
            tab.classList.remove('active', 'bg-white/20'); // Remove active state classes
            tab.classList.add('bg-white/10'); // Add inactive state class
        });

        // Activate the selected tab visually
        const activeTab = document.getElementById(`step${stepNumber}-tab`);
        if (activeTab) {
            activeTab.classList.add('active', 'bg-white/20'); // Add active state classes
            activeTab.classList.remove('bg-white/10'); // Remove inactive state class
        }

        // Show the selected content section using opacity
        const selectedContent = document.getElementById(`step${stepNumber}-content`);
        if (selectedContent) {
            selectedContent.classList.add('active', 'opacity-100');
            selectedContent.classList.remove('opacity-0'); // ONLY toggle opacity
        }
    }

    // Add click event listeners to tabs
    stepTabs.forEach((tab, index) => {
        // Assign the click handler directly if the function exists globally or is defined within scope
        // Or better, add an event listener
        const stepNumber = index + 1; // Assuming steps are 1-based
        tab.addEventListener('click', () => showStep(stepNumber));
    });

    // Initialize the first tab/content as active
    // Ensure all content elements have base transition classes and initial state
    stepContents.forEach((content, index) => {
        content.classList.add('transition-opacity', 'duration-500', 'ease-in-out'); // Add base transition classes
        if (index === 0) {
            content.classList.add('active', 'opacity-100');
            content.classList.remove('opacity-0');
        } else {
            content.classList.remove('active', 'opacity-100');
            content.classList.add('opacity-0');
        }
    });

    // Check if elements exist before trying to access them
    const firstTab = document.getElementById('step1-tab');
    // No need to explicitly show first content here, it's handled in the loop above
    if (firstTab) {
        firstTab.classList.add('active', 'bg-white/20'); // Set first tab visual state
        firstTab.classList.remove('bg-white/10');
    } else {
        console.error("Initial process step tab (step1-tab) not found.");
    }

    // Make showStep globally accessible IF it's called via inline onclick (which we removed)
    // If not needed globally, keep it scoped within this event listener.
    // window.showStep = showStep; // Uncomment if needed globally, but it's better practice to use event listeners as done above.
}); 