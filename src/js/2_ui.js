// Open Key section
$(".key-button").click(function () {
  if( $('.key-section').hasClass("hide") ) {
    $(".key-section").addClass("shown");
    $(".key-section").removeClass("hide");
  }
});

$(".key-close-button").click(function () {
  if( $('.key-section').hasClass("shown") ) {
    $(".key-section").addClass("hide");
    $(".key-section").removeClass("shown");
  }
});

// Open Settings section
$(".settings-button").click(function () {
  if( $('.mobile-nav').hasClass("hide") ) {
    $(".mobile-nav").addClass("shown");
    $(".mobile-nav").removeClass("hide");
  }
});

$(".settings-close-button").click(function () {
  if( $('.mobile-nav').hasClass("shown") ) {
    $(".mobile-nav").addClass("hide");
    $(".mobile-nav").removeClass("shown");
  }
});
