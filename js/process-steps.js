function showStep(stepNumber) {
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
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.classList.remove('bg-white/10');
        activeTab.classList.add('bg-white/20');
    }

    // Show the selected content
    const selectedContent = document.getElementById(`step${stepNumber}-content`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Initialize the first tab when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showStep(1);
}); 