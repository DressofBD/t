$().ready(function(){
  
    (function owlInit(){
  
      $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 1,
        nav: true,
        dots: false,
        mouseDrag: false,
        responsive:{
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          800: {
            items: 3
          },
          1280: {
            items: 4
          }
        },
      });
  

    })();
  
  });