// function of going to the top of the page 
var myscrollbutton = document.getElementById('go_top');
var headerScrolled = document.getElementById("header")
 window.onscroll=function(){
     if(window.pageYOffset>=40){
         myscrollbutton.style.opacity=1;
         headerScrolled.classList.add("header")
     }else{
        myscrollbutton.style.opacity=0;
        headerScrolled.classList.remove("header")
 }
}

 // function navbartoggle
 var navbutton = document.querySelector(".nav-burger")
 var navBar    = document.querySelector(".nav")
 navbutton.addEventListener("click",()=>{
     navBar.classList.toggle("activenav");
     navbutton.classList.toggle("nav-button");
 })
 // jquery couenter up
 // jQuery counterUp
 $(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      // funtctio animations
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
 })
 
 $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 1000) {
        $(".main-sec").fadeIn();
        $(this).fadeIn("slow");
        $(this).fadeIn(4000);
      }
      else{
        $(".main-sec").fadeOut();   
     $(this).fadeOut("slow") 
     $(this).fadeOut(3000) }
    });
  });
 
  