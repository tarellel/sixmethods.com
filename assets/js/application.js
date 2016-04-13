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
});
