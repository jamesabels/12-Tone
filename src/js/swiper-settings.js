/// <reference path="../../typings/jquery/jquery.d.ts"/>

// Init Swiper
$(document).ready(function () {
  //initialize swiper when document ready  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    keyboardControl: true
  })        
});