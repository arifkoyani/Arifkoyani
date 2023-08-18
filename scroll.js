// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to change the navbar color when scrolling
function changeNavbarColorOnScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Define the scroll position at which you want the color to change
    const scrollThreshold = 100; // Change this value as needed

    // Check if the scroll position is beyond the scroll threshold
    if (scrollPosition > scrollThreshold) {
        // Add the "navbar-scrolled" class to change the color
        navbar.classList.add('navbar-scrolled');
    } else {
        // Remove the "navbar-scrolled" class to revert to the default color
        navbar.classList.remove('navbar-scrolled');
    }
}

// Attach the scroll event listener to call the function when scrolling
window.addEventListener('scroll', changeNavbarColorOnScroll);
