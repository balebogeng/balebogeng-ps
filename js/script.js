$(document).ready(function () {
  /* Global vars */
  var SCROLL_PX_LIMIT = 65;
  var GALLERY_CHANGE_INTERVAL = 5000;
  var GALLERY_WINDOW_BREAKPOINT = 992;

  var GALLERY_CONFIG = {
    listPosition: 'left',
    intervalDuration: GALLERY_CHANGE_INTERVAL
  };
  var GALLERY_MOBILE_CONFIG = {
    displayList: false,
    displayControls: true,
    intervalDuration: GALLERY_CHANGE_INTERVAL
  };

  var galleryListHide = function(galleryClassSelector) {
    var shouldHide = $(galleryClassSelector).css('visibility') === 'hidden';
    shouldHide = shouldHide && pgwSlider.config.displayList;
    return shouldHide;
  }
  var galleryListReShow = function(galleryClassSelector) {
    var shouldReShow = $(galleryClassSelector).css('visibility') !== 'hidden';
    shouldReShow = shouldReShow && !pgwSlider.config.displayList;
    return shouldReShow;
  }

  var pgwSlider = $('.pgw-slider').pgwSlider(
    $(window).width() > GALLERY_WINDOW_BREAKPOINT
      ? GALLERY_CONFIG
      : GALLERY_MOBILE_CONFIG
  );

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

  // If a mobile breakpoint was triggered, reload the gallery for a more
  // compact view.
  $(window).resize(function() {
    if (galleryListHide('.pgw-slider')) {
      pgwSlider.reload(GALLERY_MOBILE_CONFIG);
    } else if (galleryListReShow('.pgw-slider')) {
      pgwSlider.reload(GALLERY_CONFIG)
    }
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
