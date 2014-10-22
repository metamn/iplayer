$(document).ready(function() {
  
  // Share 
  $('#navigation-2 .icon:last-of-type').click(function() {
    $("#share").toggleClass('active');
  });
  
  
  // Play
  $('#start-tutorial .icon, #navigation-2 .icon:first-of-type').click(function() {
    $('html').addClass('play');
  });
  
});

