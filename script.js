// Shared JavaScript functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality will be added here
    console.log('FoodieFiesta app loaded');
    
    // Form validation for login/signup forms
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Function to handle mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Function to handle user authentication
function handleAuth(isLogin = true) {
    // This would be replaced with actual auth logic
    console.log(isLogin ? 'Login handled' : 'Signup handled');
    return false; // Prevent form submission for demo
}

// Function to load more menu items
function loadMoreItems() {
    // This would fetch more items from an API
    console.log('Loading more menu items...');
    return false; // Prevent default for demo
}