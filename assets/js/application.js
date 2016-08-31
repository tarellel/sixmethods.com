$(document).ready(function(){

  if($(window).scrollTop() == 0){
    $('.navbar').removeClass('scrolled');
  }else{
    $('.navbar').addClass('scrolled');
  }


  $(window).scroll(function(){
    if($(window).scrollTop() == 0){
      $('.navbar').removeClass('scrolled');
    }else{
      $('.navbar').addClass('scrolled');
    }
  });

  // SmoothScrolling, for in-page links: a[href=#]
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
