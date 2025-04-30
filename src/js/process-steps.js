document.addEventListener('DOMContentLoaded', function() {
    const stepTabs = document.querySelectorAll('.process-step');
    const stepContents = document.querySelectorAll('.process-content');

    function showStep(stepNumber) {
        // Hide all content sections
        stepContents.forEach(content => {
            // Instead of just removing 'active', ensure it's hidden.
            // We'll use a combination of 'active' for logic and Tailwind's 'hidden' for display.
            content.classList.remove('active');
            content.classList.add('hidden'); // Add hidden class
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

        // Show the selected content section
        const selectedContent = document.getElementById(`step${stepNumber}-content`);
        if (selectedContent) {
            selectedContent.classList.add('active');
            selectedContent.classList.remove('hidden'); // Remove hidden class to show it
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
    // Check if elements exist before trying to access them
    const firstTab = document.getElementById('step1-tab');
    const firstContent = document.getElementById('step1-content');

    if (firstTab && firstContent) {
        showStep(1); // Call showStep to correctly initialize the first step
    } else {
        console.error("Initial process step elements (step1-tab or step1-content) not found.");
    }

    // Make showStep globally accessible IF it's called via inline onclick (which we removed)
    // If not needed globally, keep it scoped within this event listener.
    // window.showStep = showStep; // Uncomment if needed globally, but it's better practice to use event listeners as done above.
}); 