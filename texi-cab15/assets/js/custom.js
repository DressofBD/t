
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		if (scroll >= 150) {$(".top-header").addClass("top-header-fixed");} 
		else {$(".top-header").removeClass("top-header-fixed");}
});


/*--Scroll Back to Top Button Show--*/ 
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
  } else {
      $('#back-to-top').fadeOut();
  }
});     
//Click event scroll to top button jquery 
$('#back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},600);
  return false;
});



jQuery(document).ready(function($){
// Get current path and find target link
var path = window.location.pathname.split("/").pop();

// Account for home page with empty path
if ( path == '' ) {
	path = 'index';
}

var target = $('nav a[href="'+path+'"]');
// Add active class to target link
target.closest( "li" ).addClass('current-parent');
target.addClass('current');
});