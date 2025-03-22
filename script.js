function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const icon = document.getElementById('menu-icon');
  if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      icon.setAttribute('data-lucide', 'menu');
  } else {
      menu.classList.add('active');
      icon.setAttribute('data-lucide', 'x');
  }
  lucide.createIcons();
}
document.addEventListener("DOMContentLoaded", function() {
  lucide.createIcons();
});