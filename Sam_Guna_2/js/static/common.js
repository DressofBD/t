$(document).ready(function() {
  $(".service-list a").on("click", function(e) {
    e.preventDefault();
    var $pop = $(this)
      .parent()
      .find(".pop-learn");
    if ($pop.hasClass("show")) {
      $pop.removeClass("show");
    } else {
      $(".service-list .pop-learn").removeClass("show");
      $pop.addClass("show");
    }
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".pop-learn, .service-list a").length) {
      $(".service-list .pop-learn").removeClass("show");
    } else {
      $(".service-list .pop-learn .close").on("click", function() {
        $(".service-list .pop-learn").removeClass("show");
      });
    }
  });
});
