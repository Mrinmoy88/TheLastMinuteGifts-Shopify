// aos js
AOS.init({
  duration: 1200,
});
// mobile version
AOS.init({ disable: 'mobile' });
AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});

// banner slider js
$('#banner-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  //infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //infinite: true,
        //dots: true
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// gifts category slider

$('#gifts-category-slider').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  centerMode: false,
  centerPadding: '0%',
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.featured-product-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        centerPadding: '0%',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0%',
      },
    },
  ],
});
$('.featured-prev-btn').click(function () {
  $('.featured-product-slider').slick('slickPrev');
});

$('.featured-next-btn').click(function () {
  $('.featured-product-slider').slick('slickNext');
});

//

$('#new-product-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        centerPadding: '0%',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0%',
      },
    },
  ],
});
$('.newprd-prev-btn').click(function () {
  $('#new-product-slider').slick('slickPrev');
});

$('.newprd-next-btn').click(function () {
  $('#new-product-slider').slick('slickNext');
});

//########### shop left sidebar Accordian
$('.accordion_list').each(function () {
  var $accordian = $(this);
  $accordian.find('.accordion_head').on('click', function () {
    $(this).parent().find('.accordion_head').removeClass('open close-tog');
    $(this).removeClass('open').addClass('close-tog');
    $accordian.find('.accordion_body').slideUp();
    if (!$(this).next().is(':visible')) {
      $(this).removeClass('close-tog').addClass('open');
      $(this).next().slideDown();
    }
  });
});

//

$('.accordion_sub_list').each(function () {
  var $accordian = $(this);
  $accordian.find('.accordion_sub_head').on('click', function () {
    $(this).parent().find('.accordion_sub_head').removeClass('open close-tog');
    $(this).removeClass('open').addClass('close-tog');
    $accordian.find('.accordion_sub_body').slideUp();
    if (!$(this).next().is(':visible')) {
      $(this).removeClass('close-tog').addClass('open');
      $(this).next().slideDown();
    }
  });
});

$('#product-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#product-thumbnail-slider',
});
$('#product-thumbnail-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '#product-big-slider',
  dots: false,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-angle-left'></i></button>",
  nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-angle-right'></i></button>",
  centerMode: true,
  focusOnSelect: true,
});

//
$(document).ready(function () {
  $('.add').click(function () {
    if ($(this).prev().val() < 50) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $('.sub').click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });
});

//
$('#related-products-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  //infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        //infinite: true,
        //dots: true
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
