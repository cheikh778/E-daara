document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var navLinks = document.getElementById('navLinks');
    var authButtons = document.getElementById('auth-buttons');
    var navbar = document.getElementById('navbar');

    
    if (toggleButton && navLinks && authButtons) {
        toggleButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');
        });
    }

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Active link logic
    var currentPath = window.location.pathname;
    var navLinkElements = document.querySelectorAll('.nav-link');

    navLinkElements.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinkElements.forEach(function(l) {
                l.classList.remove('active');
            });
            // Add active class to the clicked link
            link.classList.add('active');
        });
    });
});



// AOS Initialization
AOS.init();