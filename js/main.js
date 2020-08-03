$(function(){
  'use strict';
  const winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - (upperH + navH));
  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') === 'all'){
      $('.shuffle-images .col-md').css('opacity',1);
    }else{
      $('.shuffle-images .col-md').css('opacity', .2);
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
});