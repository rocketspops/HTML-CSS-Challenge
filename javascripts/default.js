$(function() {

 $('.nav__menu a').click( function() { 
   $('.nav__menu a').removeClass('active');
   $(this).addClass('active');
   return false;
 }) 

});
