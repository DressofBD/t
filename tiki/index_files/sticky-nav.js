$().ready(function(){

  (function() {
    var lastScrollY = 0;
    var previousScrollY = 0;
    var ticking = false;
    var eBody = $('body');
    var scrollThreshold = $('.header__top').outerHeight();
    var headerHeight = $('header.header').outerHeight();

    /*
     * <body> class of '.sticky-nav' sets position to fixed and translates positon off screen
     * <body> class of '.sticky-nav' AND '.sticky-nav-show' animates main nav in from top
     */
  
    var update = function() {

      ticking = false;

      if (eBody.hasClass('mobile-nav-open')) {
        return false;
      }

      // if scrolling at all set position fixed and hide off screen
      if (lastScrollY > scrollThreshold && lastScrollY >= headerHeight ) {
        eBody.addClass('sticky-nav');
      } else {
        eBody.removeClass('sticky-nav')
      }

      // if scrolling up show
      if (lastScrollY > previousScrollY) {
        // scrolling up
        eBody.removeClass('sticky-nav-show');
      } else {
        // scrolling down
        eBody.addClass('sticky-nav-show');
      }

      // scrolled to very top so remove both classes / cleanup
      if( lastScrollY <= headerHeight ){
        eBody.removeClass('sticky-nav-show', 'sticky-nav');
      }

      //console.log(lastScrollY, scrollThreshold, headerHeight);

      // if paused show
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
        // not if we are at the top of page and not still in header territory
        if(lastScrollY !== 0 && lastScrollY >= headerHeight){
          eBody.addClass('sticky-nav-show');
        }
      
      }, 3000));

    };
  
    var requestTick = function() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
  
    var onScroll = function() {
      previousScrollY = lastScrollY;
      lastScrollY = $(window).scrollTop(); //document.documentElement.scrollTop;//ie11 does not like window.scrollY;
      requestTick();

      eBody.removeClass('meganav-open');
      $('.main-nav__item').removeClass('hover');
    };

    
  
    $(window).on('scroll', onScroll);
  })();

});