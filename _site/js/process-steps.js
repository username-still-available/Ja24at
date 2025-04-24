function showStep(stepNumber) {
    console.log(`showStep called with: ${stepNumber}`); // Log function call

    // Hide all content sections
    document.querySelectorAll('.process-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Update tab styling
    document.querySelectorAll('.process-step').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.remove('bg-white/20');
        tab.classList.add('bg-white/10');
    });
    
    // Style the active tab
    const activeTab = document.getElementById(`step${stepNumber}-tab`);
    console.log(`Found activeTab for step ${stepNumber}:`, activeTab); // Log found tab element
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.classList.remove('bg-white/10');
        activeTab.classList.add('bg-white/20');
        console.log(`Added active class to tab ${stepNumber}`); // Log class addition
    } else {
        console.error(`Could not find tab element with ID: step${stepNumber}-tab`);
    }
    
    // Show the selected content
    const selectedContent = document.getElementById(`step${stepNumber}-content`);
    console.log(`Found selectedContent for step ${stepNumber}:`, selectedContent); // Log found content element
    if (selectedContent) {
        selectedContent.classList.add('active');
        console.log(`Added active class to content ${stepNumber}`); // Log class addition
    } else {
        console.error(`Could not find content element with ID: step${stepNumber}-content`);
    }
}

// Initialize the first tab
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the first step content is shown initially
    const firstContent = document.getElementById('step1-content');
    if (firstContent) {
        firstContent.classList.add('active');
    }
    // Ensure the first tab is styled as active initially
    const firstTab = document.getElementById('step1-tab');
    if (firstTab) {
        firstTab.classList.add('active');
        firstTab.classList.remove('bg-white/10');
        firstTab.classList.add('bg-white/20');
    } else {
        // Fallback or initial setup if needed when DOM is ready
        showStep(1); // Call showStep if elements might not exist yet or for safety
    }
}); 