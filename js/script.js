$(document).ready(function () {
  /* Global vars */
  var SCROLL_PX_LIMIT = 65;

  /* Events */
  // Un-blend the navbar from the content header when scrolling
  $(window).scroll(function () {
    /* 
     * If the user scrolls past a scroll limit,
     * add and remove CSS classes for transition effects.
     */
    if ($(this).scrollTop() > SCROLL_PX_LIMIT) {
      $('.navbar-view-blend').addClass('navbar-view-static');
      $('.navbar-view-blend').removeClass('navbar-view-blend');
    } else {
      $('.navbar-view-static').addClass('navbar-view-blend');
      $('.navbar-view-static').removeClass('navbar-view-static');
    }
  });

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      /*
       * Using jQuery's animate() method to add smooth page scroll
       * The optional number (800) specifies the number of milliseconds it 
       * takes to scroll to the specified area
       */
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });

  // Synchronize hover effect for footer sponsor logos
  $('.footer .sponsor a').on({
    'mouseenter': function() {
      $(this).find('.logo-placeholder').addClass('hover');
    }, 'mouseleave': function() {
      $(this).find('.logo-placeholder').removeClass('hover');
    }
  });

});
