(function($) {
  "use strict"

    // button up

    var btn = $('.scroll-to-top');  

     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, 1000);
     });
})(jQuery);

    $("a.list_text").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 3000);
    return false;
  });