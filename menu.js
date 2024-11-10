const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

mobileMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

// Close menu when clicking outside
mobileMenu.addEventListener('click', function (event) {
  if (event.target === this) {
    toggleMenu();
  }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    toggleMenu();
  }
});

// Handle window resize
window.addEventListener('resize', function () {
  if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
    toggleMenu();
  }
});
