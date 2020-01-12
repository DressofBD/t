$(document).ready(function() {
  var timer1;
  $(document).on("click", ".header__menu", function(event) {
    // console.log('CLICK - MENU')
    clearTimeout(timer1);
    timer1 = setTimeout(function() {
      $(".navigation").toggleClass("navigation__open");
      $(".author-list").removeClass("author-list-open");
      $(".navigation-language").removeClass("navigation-language__open");
    }, 200);
    event.stopPropagation();
  });

  var timer2;
  $(document).on("click", ".header__language", function(event) {
    // console.log('CLICK - LANG')
    clearTimeout(timer2);
    timer2 = setTimeout(function() {
      $(".navigation-language").toggleClass("navigation-language__open");
      $(".author-list").removeClass("author-list-open");
      $(".navigation").removeClass("navigation__open");
    }, 200);
    event.stopPropagation();
  });

  $(document).on("click", ".navigation-language__link", function(event) {
    // console.log('CLICK - LANG')
    $(".navigation-language").removeClass("navigation-language__open");
  });

  $(document).on("click", function(event) {
    // console.log('ALL CLOSE')
    if (!$(event.target).closest(".author-list").length) {
      $(".author-list").removeClass("author-list-open");
    }
    if (!$(event.target).closest(".navigation").length) {
      $(".navigation").removeClass("navigation__open");
    }
    if (!$(event.target).closest(".navigation-language").length) {
      $(".navigation-language").removeClass("navigation-language__open");
    }
  });
});
