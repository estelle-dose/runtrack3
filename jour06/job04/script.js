// Script pour afficher/cacher les liens du menu hamburger
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});
