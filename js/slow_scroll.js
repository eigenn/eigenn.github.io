$("#nav ul li a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });

});