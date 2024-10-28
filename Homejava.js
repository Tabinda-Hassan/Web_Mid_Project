const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        navLinks.classList.add('active'); // Show nav links
    } else {
        navLinks.classList.remove('active'); // Hide nav links
    }
});

// Close menu when a link is clicked (for better UX)
navLinks.addEventListener('click', function() {
    navLinks.classList.remove('active');
    menuToggle.checked = false; // Uncheck the checkbox to close the menu
});




// Testimonials
let currentIndex = 0; // Current index of the first visible testimonial
const items = document.querySelectorAll('.testmonial'); // All testimonial items
const totalItems = items.length; // Total number of testimonials
const slideCount = 3; // Number of testimonials to display

function updateSlider() {
    const sliderWrap = document.querySelector('.slider-wrap');
    sliderWrap.style.transform = `translateX(-${(currentIndex / totalItems) * 100}%)`;
    updateDots();
}

function showNext() {
    currentIndex += slideCount;
    // If the current index exceeds the total items, loop back to the start
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Reset to first testimonial
    }
    updateSlider();
}

function showPrevious() {
    currentIndex -= slideCount;
    // If the current index is less than zero, set it to the last group of testimonials
    if (currentIndex < 0) {
        currentIndex = Math.max(totalItems - slideCount, 0); // Ensure we don't go negative
    }
    updateSlider();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentIndex / slideCount));
    });
}

// Event listeners for arrows
document.querySelector('.arrow.arrow-left').addEventListener('click', showPrevious);
document.querySelector('.arrow.arrow-right').addEventListener('click', showNext);

// Event listeners for dots
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index * slideCount; // Update current index based on dot clicked
        updateSlider();
    });
});

// Initialize the slider
updateSlider();





