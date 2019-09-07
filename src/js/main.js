
// Slick1
$(document).ready(function () {

  $('.our-project__carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

// Slick2
$(document).ready(function () {
  $('.reviews__carousel').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//Scroll
$(document).ready(function(){
  $("#nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


//popup
$(document).ready(function(){
  $('.open-popup').click(function(){
    $('.form-popup').css({'top': $(window).scrollTop() +300 }).addClass('db');
    $('.bg-popup').fadeIn(300);

    $('.bg-popup').click(function(){
      $('.form-popup').removeClass('db');
      $('.bg-popup').fadeOut(300);
    });

  });
});


$(window).scroll(function(){
  $('.form-popup').css({'top': $(window).scrollTop() +300 })
}).scroll();
