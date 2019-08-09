$().ready(function(){

  var breadcrumbInit = (function(){
    /*
     * IIFE function to toggle a class (.open) used to show / hide the breadcrumb subnav
     * 
     * 1. change display property of subnav _breadcrumb.scss
     * 2. rotate icon on trigger - _breadcrumb.scss
     * 
     * TODO:
     * Look into using requestAnimationFrame ?
     * 
     */

    // var eTrigger = $('.js-toggle-breadcrumbs')
    // ,   eWrap = $('.header__breadcrumbs');
    // ;

    // eTrigger.on( 'click', function(event){
    //   eWrap.toggleClass('open');
    //   event.preventDefault();
    // });

    var browse_button = '.js-toggle-breadcrumbs',
        close_button = '.js-close-breadcrumbs';

    var isExpanded = function(el) {
      if (el.attr('aria-expanded') == 'true') {
        return true;
      }

      return false;
    }

    $(browse_button).on('click', function() {
      var _this = $(this);

      if (isExpanded(_this)) {
        _this.attr('aria-expanded', false);
      } else {
        _this.attr('aria-expanded', true);
      }

      $('#' + _this.attr('aria-owns')).slideToggle();
    });

    $(close_button).on('click', function() {
      var _this = $(this);

      $(browse_button).attr('aria-expanded', false);
      $('#' + _this.attr('aria-owns')).slideToggle();
    });

  })();

});