$(function() {

 $('.nav li a').click( function() { 
   $('.nav li a').removeClass('active');
   $(this).addClass('active');
   return false;
 }) 

});
