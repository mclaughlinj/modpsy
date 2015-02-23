$( document ).ready(function() {

/*
===============
Fade in
===============
*/

//$('.overcast,.overcastLt').animate({'background-position-x': '7000px','background-position-y': '5000px'}, 14000);
//$('.overcast,.overcastLt').css({'-moz-transition': 'background-position 24s', 'backgroundPosition': '7000px 7000px'});
$('.appear2000').fadeIn(2000, function() {
    $('.appear3000').fadeIn( 2000 );
    $('nav').fadeIn( 2000 );
    $('footer').fadeIn( 3000 );
  });

$('nav').mouseenter(function() {
  console.log('mouseenter');
  $('nav').animate({left: '0'}, 400).css('background','#FFFFFF');
  $('#navArrow').fadeOut( 400 );
});
$('nav').mouseleave(function() {
  console.log('mouseleave');
  $('nav').animate({left: '-170'}, 200, function() {$('#navArrow').fadeIn( 400 );}).css('background','#6C6C6C');
});

});
