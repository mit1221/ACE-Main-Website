$(document).ready(function() {
  var $background = $('.background');

  window.addEventListener('scroll', parallax);
  parallax();

  function parallax() {
    $background.css('background-position', '0%' + (100 - window.pageYOffset / 2.3) + '%');
  }
});
