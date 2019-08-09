$().ready(function(){
	(function() {

		// Stickyfill JS
		// https://github.com/wilddeer/stickyfill
		$('.dancefloor__image, .train__image').Stickyfill();



		// $('.header').on('scroll', function(e) {
		// 	console.log('header scroll');
		// 	e.stopPropagation();
		// });
    //
		// $(window).on('scroll', function(e) {
		// 	console.log('body scroll');
		// 	e.stopPropagation();
		// });

		$(window).on('resize', function() {
			if($('body').width() >= 800) {
				$('body').removeClass(lock_class)
						 .removeClass(mobile_menu_body_class);
				closeSection($(mobile_menu), mobile_button_open, mobile_button_close);
				$(mobile_menu).removeClass(mobile_menu_variation);
			}
		});

		var toggleBodyLock = function() {
			$('body').toggleClass(lock_class);
		}

		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
		      e.preventDefault();
		  e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
		    if (keys[e.keyCode]) {
		        preventDefault(e);
		        return false;
		    }
		}

		var thebody = document.getElementsByTagName('body');

		function disableScroll() {
		  if (window.addEventListener) // older FF
		      window.addEventListener('DOMMouseScroll', preventDefault, false);
		  window.onwheel = preventDefault; // modern standard
		  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		  window.ontouchmove  = preventDefault; // mobile
		  document.onkeydown  = preventDefaultForScrollKeys;
		}

		function enableScroll() {
	    if (window.removeEventListener)
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null;
	    window.onwheel = null;
	    window.ontouchmove = null;
	    document.onkeydown = null;
		}

		var toggleButton = function(_this, _state_class, _btn_variation, _body_class) {
			$('#' + _this.attr('aria-owns')).toggleClass(_state_class);
		    $('body').toggleClass(_body_class)
			_this.toggleClass(_btn_variation);
		}

		var closeSection = function(_this, _btn_open, _btn_close) {
			_this.attr('aria-expanded', false);
			$(_btn_open).attr('hidden', false);
			$(_btn_close).attr('hidden', true);
		}

		var openSection = function(_this, _btn_open, _btn_close) {
			_this.attr('aria-expanded', true);
			$(_btn_open).attr('hidden', true);
			$(_btn_close).attr('hidden', false);
		}

		var mobile_menu 			= '.mobile-nav',
			mobile_menu_variation 	= 'mobile-nav--close'
			mobile_button_open 		= '.mobile-nav__button--open',
			mobile_button_close 	= '.mobile-nav__button--close',
			state_class 			= 'is-open',
			mobile_menu_body_class 	= 'mobile-nav-open',
			lock_class 				= 'u-lock';

		$(mobile_menu).on('click', function(){
			var _this = $(this);

			if($(search_button).attr('aria-expanded') == 'true') {
				$(search_button).trigger('click');
			}

			toggleButton(_this, state_class, mobile_menu_variation, mobile_menu_body_class);
			toggleBodyLock();

			if(_this.attr('aria-expanded') == 'true') {
				closeSection(_this, mobile_button_open, mobile_button_close);
				// enableScroll();
			} else {
				openSection(_this, mobile_button_open, mobile_button_close);
				// disableScroll();
			}
		});

		var isMedia = function(condition, breakpoint) {
			var _width = $(window).width();

			if (((condition == 'max') && (_width < breakpoint)) || ((condition == 'min') && (_width >= breakpoint))) {
				return true;
			}

			return false;
		};

		var resetSubnav = function(_subnav_parent, _subnav) {
			_subnav_parent.removeClass(state_class);
			_subnav.removeAttr('style');
		}

		var button_subnav 	= '.button-subnav',
			subnav_parent	= '.main-nav__item',
			subnav 			= '.main-subnav',
			btn_close_meganav = '.js-close-meganav',
			state_class 	= 'is-open';


		//
		$(button_subnav).on('click', function(){
			if (isMedia('min', 1024)) {
				resetSubnav($(subnav_parent + '.' + state_class), $(subnav));
				return false;
			}

			var _this = $(this);

			if (!_this.parents(subnav_parent).hasClass(state_class)) {
				$(subnav_parent+'.'+state_class).toggleClass(state_class).find(subnav).slideToggle();
			}
			_this.parents(subnav_parent).toggleClass(state_class).find(subnav).slideToggle();
		});


		// close btn within meganav to close it
		$(btn_close_meganav).on('click', function( event ){

			var parent 	= $(this).parents('.main-nav__item'),
				body = $('body');

			if (parent.hasClass('hover')) {
				parent.removeClass('hover');
			}

			if (body.hasClass('meganav-open')) {
				body.removeClass('meganav-open');
			}

			event.preventDefault();

		});


		// Meganav open / close
		$('.header__nav').on('mouseup', '.main-nav__item:not(.is-homelink)', function( event ){
			var el = $(this),
				body = $('body');

			if (el.hasClass('hover')) {
				el.removeClass('hover');
				body.removeClass('meganav-open');
			} else {
				$('.main-nav__item.hover').removeClass('hover');
				el.addClass('hover');
				body.addClass('meganav-open');
			}

		});


		// #531. Listen for any clicks off the meganav and close it
		$('body').on( 'click', function(e) {

			var body = $(this)
			,	meganavContainer = $(".main-subnav__wrapper")
			;

			if( !meganavContainer.is(e.target)
				&& meganavContainer.has(e.target).length === 0
				&& body.hasClass('meganav-open')
			){
				//console.log('open and outer item');
				$('.main-nav__item.hover').removeClass('hover');
				body.removeClass('meganav-open');
			}


		});


		// #538. Dont want inside items to close the meganav
		$('.main-subnav__wrapper a').mouseup( function( event ) {
			event.stopPropagation();
		});


		// Search open / close
		var search_button            = '.button-search',
			search_button_variation  = 'button-search--close'
			search_button_open       = '.search__button--open',
			search_button_close      = '.search__button--close',
			state_class              = 'is-open',
			body_class 				 = 'search-open',
			lock_class               = 'u-lock',
			helper_class			 = 'search-active';

		$(search_button).on('click', function(){
			var _this = $(this);

			if($(mobile_menu).attr('aria-expanded') == 'true') {
				$(mobile_menu).trigger('click');
			}

			toggleButton(_this, state_class, search_button_variation, body_class);
			toggleBodyLock();

			// $('body').toggleClass(helper_class);

			if(_this.attr('aria-expanded') == 'true') {
				closeSection(_this, search_button_open, search_button_close);
				enableScroll();
				// $('#txtSearch').blur();
			} else {
				openSection(_this, search_button_open, search_button_close);
				$('#txtSearch').focus();
				disableScroll();
			}

		});
	})();
});
