$(document).ready(function() {
  
  // Share 
  $("#navigation-2 .icon:last-of-type, #share #close").click(function() {
    $("#share").toggleClass('active');
    $("header, #player").toggleClass('inactive');
  });
  
  
  // Play
  $('#start-tutorial .icon, #navigation-2 .icon:first-of-type').click(function() {
    $('html').addClass('play');
  });
  
});

