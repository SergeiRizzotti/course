$(function () {
  // Scroll
  jQuery(window).scroll(function () {
    var $item = $('.menu__list');
    $item.each(function (_, el) {
      var top = $(el).offset().top; // -150
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('a.active').removeClass('active');
        $('a[href="#' + id + '"]').addClass('active');
      }
    });
  });

  $('.menu').on('click', 'a', function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top - 200;

    $('.menu-btn').removeClass('active');
    $('.header__menu').removeClass('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({overflow: 'visible'});
    } else if ($('body').css('overflow') === 'visible') {
      $('body').css({overflow: 'hidden'});
    }

    $('body,html').animate({scrollTop: top}, 800);
  });

  // Add active class menu
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('active');
    $('.header__menu').toggleClass('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({overflow: 'visible'});
    } else if ($('body').css('overflow') === 'visible') {
      $('body').css({overflow: 'hidden'});
    }
  });

  // Expand program item
  $('.program__item').click(function (event) {
    $(this)
      .toggleClass('active')
      .next('.program__item_details-block')
      .slideToggle(300);
  });

  // Slick slider
  $('.speakers__slider').on('init reInit afterChange', function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.current-slide').text(i);
    $('.slide-count').text(' / ' + slick.slideCount);
  });

  $('.speakers__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./img/speakers/arrows-left.png" alt="arrows-left">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./img/speakers/arrows-right.png" alt="arrows-right">',
  });
});
