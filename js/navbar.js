(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    // $('.navigation nav ul li a:not(:only-child)').click(function(e) {
    //   $(this).siblings('.nav-dropdown').toggle();
    //   // Close one dropdown when selecting another
    //   $('.nav-dropdown').not($(this).siblings()).hide();
    //   e.stopPropagation();
    // });
    // // Clicking away from dropdown will remove the dropdown class
    // $('html').click(function() {
    //   $('.nav-dropdown').hide();
    // });
    // Toggle open and close nav styles on click
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = $('.navigation').outerHeight();
    var delta = 5;

    $(window).scroll(function(event){
      didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false; // resetting variable
        }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navigation').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.navigation').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
    }

    $('.nav-mobile').click(function() {
      $('.navigation nav ul').slideToggle(300);
      // Hamburger to X toggle
      if ($('#nav-toggle').hasClass('active')) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }

      $('#nav-toggle').toggleClass('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery
