


$(document).ready(function() {
  $('.screen.one').css('z-index', 10);  
});

$('.next.one').on('click', function() {
  $('.screen').css('z-index', -1);
  $('.screen.two').css('z-index', 10);  
});
$('.next.two').on('click', function() {
  $('.screen').css('z-index', -1);
  $('.screen.three').css('z-index', 10);
});
$('.next.three').on('click', function() {
  $('.screen').css('z-index', -1);
  $('.screen.one').css('z-index', 10);
});
