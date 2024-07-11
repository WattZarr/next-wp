//文字コードはutf-8
console.log('共通で使うJS');

//ハンバーガーメニュー
//メディアクエリ指定
const mediaQuery = window.matchMedia('(max-width: 768px)');
// ページが読み込まれた時に実行
handle(mediaQuery);

function handle(mm) {
    $(function() {
        const menu = document.querySelectorAll('.spNavigation__list');
        const openBtn = document.querySelectorAll('.openbtn');
      
        $(menu).hide();
        $(openBtn).click(function(e) {
          if ($(openBtn).hasClass("active")) {
            $(openBtn).removeClass('active');
            $(menu).slideUp();
            $(".spNavigation").removeClass("active");
          }else {
            $(openBtn).toggleClass('active');
            $(menu).slideDown();
            $(".spNavigation").toggleClass("active");
          }
        });
      });
}

$(document).ready(function() {
  var navbar = $('.header');

  $(window).on('scroll', function() {
    // Check the scroll position
    var scrollPosition = $(this).scrollTop();

    // Add or remove the 'scrolled' class based on the scroll position
    if (scrollPosition > 5) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });

  // Initial check on page load
  $(window).trigger('scroll');

  //  scroll reveal animation
  $(window).on("scroll load",function() {
    $('.modHeading--animated').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var vh = $(window).height();
      if ((elementTop < (windowBottom - vh/2)) && (elementBottom > (windowTop + vh/3))) {
        $(this).addClass('visible');
      }
    });
  });
  $(window).on("load",function() {
    $('.modHeading--animated.modHeading--hero').each(function() {
        $(this).addClass('visible');
      })
  });
});

function playVideos(videos) {
  videos.each(function(index) {
		$(this).get(0).play();
	});
	// var video = document.querySelector('.js_inlineVideo');
	// video.addEventListener('suspend', function() {
	//   $(this).closest(".modSectionMain__cartoon__movie").addClass('suspend');
	// });
	// video.addEventListener('play', function() {
	//   $(this).closest(".modSectionMain__cartoon__movie").removeClass('suspend');
	// });
}
// hero section
$(window).on('load', function() {
  $('.modSectionMain__cartoon.brushAnimate').each(function(){
    const videos = $(".js_inlineVideo");
    if(videos.length) {
      playVideos($(this).find(".js_inlineVideo"));
      videos.addClass('is-blend');
    }
    $('.modSectionMain--top').addClass("is-act");
    console.log($(".js_inlineVideo"));
    // make the color img load after the video is loaded
    const checkReadyState = setInterval(function() {
      if (videos[0].readyState === 4) {
        $(".color,.color__img").addClass("is-act");
        clearInterval(checkReadyState); // Stop checking once ready
      }
    }, 100);
    // $('.modSectionMain--top color img').addClass("is-act")
  });
}) 

$(window).on('scroll load',function (){
  $('.main__section__img.brushAnimate').each(function(){
    if($(this).hasClass("is-act")) return;
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var videos = $(this).find('.movie__color__video');
    var imgMovie = $(this).find('.movie');
    var imgMain = $(this).find('.img');
    if ((elementTop < windowBottom - 100) && (elementBottom > windowTop)) {
      $(this).addClass('is-act');
      playVideos(videos);
      videos.addClass('is-blend');
      setTimeout(function(){
        imgMovie.addClass('is-act');
        imgMain.addClass('is-act');
        videos.addClass('is-act');
      }.bind(this),3000);
    }
  });
});


