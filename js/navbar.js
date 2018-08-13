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
    $('.nav-mobile').click(function() {
      $('.navigation nav ul').slideToggle(500);
    });
    // Hamburger to X toggle
    $('.nav-mobile').on('click', function() {
      this.classList.toggle('active');
      $('#nav-toggle').toggleClass('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery
