$(document).ready(function(){

  "use strict";

  AOS.init();

  var navBar = $('.uppernav .navbar');
  $(window).scroll(()=>{
    if($(this).scrollTop() > 10){
      $(navBar).addClass('fixed-navbar');
    }else{
      $(navBar).removeClass('fixed-navbar');
    }
  })

  if($('.header-slider').length){
    $('.header-slider').slick({
      arrows: true,
      rtl: true,
    })
  }

  if($('.screen-slider').length){
    $('.screen-slider').slick({
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:false,
      rtl: true,
      // centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
    });
  }
})