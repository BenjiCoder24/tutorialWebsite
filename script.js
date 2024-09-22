// Adding simple hover effects and fade-in animations

document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in effect for the whole page
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.5s ease-out';
    document.body.style.opacity = 1;

    // Hover effects for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.fontSize = '20px'; // Increase font size on hover
            this.style.color = '#4b0082'; // Change color to Indigo
        });
        link.addEventListener('mouseout', function() {
            this.style.fontSize = '';
            this.style.color = ''; // Reset styles
        });
    });
});

