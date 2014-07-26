$('#nav').affix({
      offset: {
        top: $('header').height() - 3
      }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});