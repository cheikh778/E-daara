document.getElementById('toggleButton').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


document.getElementById('toggleButton').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    var authButtons = document.getElementById('auth-buttons');

    // Toggle the 'active' class on navLinks and authButtons
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');
});