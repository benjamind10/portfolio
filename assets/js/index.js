function mobileMenu() {
  $('.hamburger').toggleClass('active');
  $('.nav-menu').toggleClass('active');
}

$('.hamburger').click(mobileMenu);

$('.nav-link').click(function () {
  $('.nav-menu').toggleClass('active');
});
