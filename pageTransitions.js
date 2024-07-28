// pageTransitions.js
document.addEventListener("DOMContentLoaded", function() {
    // Add fade-out class when a link is clicked
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetUrl = this.href;
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 1000); // Adjust time to match CSS transition duration
        });
    });

    // Remove fade-out class on page load
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    });
});
