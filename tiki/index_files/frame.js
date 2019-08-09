$().ready(function(){

  (function animloop(){

    var sections = $('.frame');

    sections.each(function(){
      var el = $(this);
      const offsetPx = parseInt($(window).height()) * 0.33;

      var turnOn = $(window).scrollTop() + ( el.data('frame-on') || 0) + offsetPx;
      var turnOff = $(window).scrollTop() + ( el.data('frame-off') || -200);

      if (el.offset().top <= turnOn ) {
        el.addClass('active');
      }

      if ( el.offset().top > turnOn) {
        el.removeClass('active');
      }

      if (el.offset().top <= turnOff) {
        el.removeClass('active');
      }
    });

    window.requestAnimationFrame(animloop);
  })();

});
