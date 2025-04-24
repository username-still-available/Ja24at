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
    activeTab.classList.add('active');
    activeTab.classList.remove('bg-white/10');
    activeTab.classList.add('bg-white/20');

    // Show the selected content
    const selectedContent = document.getElementById(`step${stepNumber}-content`);
    selectedContent.classList.add('active');
}

// Initialize the first tab
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('step1-content')) {
        document.getElementById('step1-content').classList.add('active');
    }
    // Ensure the first tab button also gets the active styles on load
    if (document.getElementById('step1-tab')) {
        document.getElementById('step1-tab').classList.add('active');
        document.getElementById('step1-tab').classList.remove('bg-white/10');
        document.getElementById('step1-tab').classList.add('bg-white/20');
    }
}); 