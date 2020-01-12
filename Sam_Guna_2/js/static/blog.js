$(document).ready(function() {
  const blogNavigation = $(".blog-nav");
  let navigationVisible;

  if (window.innerWidth >= 768) {
    navigationVisible = true;
  } else {
    navigationVisible = false;
    blogNavigation.hide(100);
  }

  $(document).on("click", ".blog__btn", function() {
    if (navigationVisible) {
      navigationVisible = false;
      blogNavigation.hide(100);
    } else {
      navigationVisible = true;
      blogNavigation.show(100);
    }
  });
});
