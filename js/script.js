$(document).ready(function () {
  /* Global vars */
  var SCROLL_PX_LIMIT = 85;

  /* Events */
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
});
