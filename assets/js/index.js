function mobileMenu() {
  $('.hamburger').toggleClass('active');
  $('.nav-menu').toggleClass('active');
}

$('.hamburger').click(mobileMenu);
