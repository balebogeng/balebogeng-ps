$(document).ready(function () {
  var NAVBAR_SCROLL_LIMIT = 55;

  // Check to see if the page was loaded passed the navbar blend scroll limit.
  $('html').offset().top > NAVBAR_SCROLL_LIMIT ? navbarStatic() : navbarBlend();

  // Un-blend the navbar from the content header when scrolling
  $(window).scroll(function () {
    /* 
     * If the user scrolls past a scroll limit,
     * add and remove CSS classes for transition effects.
     */
    $(this).scrollTop() > NAVBAR_SCROLL_LIMIT ? navbarStatic() : navbarBlend();
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
        scrollTop: $(hash).offset().top - 50
      }, 800);
    }
  });

  // Initialise slick carousel for iamge gallery.
  $('.slider-nav').slick({
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    responsive: [{
      breakpoint: 2200,
      settings: {
        arrows: true,
        slidesToShow: 5,
      }
    }, {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
      }
    }, {
      breakpoint: 991,
      settings: {
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // Initialise simple ligthbox for gallery image viewing.
  $('.slider-nav a').simpleLightbox({
    showCounter: false,
  });

  // Initialise Leaflet.js map.
  var map = initMap();

  // Synchronize hover effect for footer sponsor logos
  $('.footer .sponsor a').on({
    'mouseenter': function() {
      $(this).find('.logo-placeholder').addClass('hover');
    }, 'mouseleave': function() {
      $(this).find('.logo-placeholder').removeClass('hover');
    }
  });

});

// Switch navbar mode to static.
function navbarStatic() {
  $('.navbar-view-blend').addClass('navbar-view-static');
  $('.navbar-view-blend').removeClass('navbar-view-blend');
}

// Switch navbar mode to blend.
function navbarBlend() {
  $('.navbar-view-static').addClass('navbar-view-blend');
  $('.navbar-view-static').removeClass('navbar-view-static');
}

// Initialise Google Map.
function initMap() {
  // The location of the Balebogeng primary school.
  var balebogeng = [-25.706817, 28.386091];
  var map = L.map('map', {
    center: balebogeng,
    zoom: 16
  });
  // Add map layers.
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; '
        + '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
        + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
        + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamFuLWp1c3RpbiIsImEiOiJjamttZHlteWgwcDF4M3dwb3JmeG1saWpyIn0.e1I9wsxI7QgZI3z3q2jf3w'
  }).addTo(map);
  // Add marker to map.
  L.marker(balebogeng).addTo(map);
  // Add text popup.
  L.popup()
    .setLatLng([balebogeng[0] + 0.0005, balebogeng[1]])
    .setContent("Balebogeng Primary School")
    .openOn(map)
  return map;
}
