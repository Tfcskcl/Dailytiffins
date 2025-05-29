// Daily Tiffin & Co. - Main JavaScript File

// Function to handle toggle selection
function handleToggleClick(event) {
    // Get the parent toggle options container
    const toggleOptions = event.target.closest('.toggle-options');
    if (!toggleOptions) return;
    
    // Remove active class from all options in this toggle group
    const options = toggleOptions.querySelectorAll('.toggle-option');
    options.forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to the clicked option
    event.target.classList.add('active');
    
    // Update meal cards based on selected options (can be expanded later)
    updateMealCards();
}

// Function to update displayed meal cards based on selected options
function updateMealCards() {
    // Get all selected options
    const mealType = document.querySelector('.toggle-section:nth-child(1) .toggle-option.active').textContent.trim().toLowerCase();
    const frequency = document.querySelector('.toggle-section:nth-child(2) .toggle-option.active').textContent.trim().toLowerCase();
    const preference = document.querySelector('.toggle-section:nth-child(3) .toggle-option.active').textContent.trim().toLowerCase();
    
    console.log(`Selected options: ${mealType}, ${frequency}, ${preference}`);
    
    // In a real implementation, you would filter meal cards based on these selections
    // For now, we'll just log the selections
}

// Function to initialize event listeners
function initializeToggleButtons() {
    // Add click event listeners to all toggle options
    const toggleOptions = document.querySelectorAll('.toggle-option');
    toggleOptions.forEach(option => {
        option.addEventListener('click', handleToggleClick);
    });
}

// Add mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeToggleButtons();
    initializeMobileMenu();
    
    // If this is a meal page with toggles, highlight the correct option based on the page
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    if (['breakfast', 'lunch', 'dinner', 'instant'].includes(currentPage)) {
        const mealTypeOptions = document.querySelectorAll('.toggle-section:nth-child(1) .toggle-option');
        mealTypeOptions.forEach(option => {
            if (option.textContent.trim().toLowerCase() === currentPage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
});
