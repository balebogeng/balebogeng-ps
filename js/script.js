$(document).ready(function () {
  /* Global vars */
  var SCROLL_PX_LIMIT = 80;
  var NAV_SCROLL_FADE_TIME = 500;

  /* Events */
  $(window).scroll(function () {
    /* 
     * If the user scrolls past a scroll limit,
     * fade the navbar in and out as necessary.
     */
    if ($(this).scrollTop() > SCROLL_PX_LIMIT) {
      $('nav.navbar').fadeIn(NAV_SCROLL_FADE_TIME);
    } else {
      $('nav.navbar').fadeOut(NAV_SCROLL_FADE_TIME);
    }
  });
});
