$(document).ready(function(){

  $(".toggle").click(function() {
    $(".main-nav__list").slideToggle(500);
  });

  $(window).resize(function(){
    if($(window).width() > 425 ) {
      $(".main-nav__list").removeAttr("style");
    }
  });

});
