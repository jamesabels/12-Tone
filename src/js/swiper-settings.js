/// <reference path="../../typings/jquery/jquery.d.ts"/>


// Init Swiper
$(document).ready(function () {
  //initialize swiper when document ready  
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    paginationBulletRender: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    paginationHide: false,
    direction: 'horizontal',
    loop: true,
    keyboardControl: true
  });
});