$(document).ready(function() {



//Let's do some hover stuff

$( ".faderbox" ).hover(function() {
 	 $(this).fadeOut("500");
 	 $(this).fadeIn("1000");
 	 
	});


$( ".bouncebox" ).hover(function() {
 	$(this).animate({
    top: "+=10"
  }, 1000, function() {
    // Animation complete.
  });
	});

$( ".monsterreveal" ).mouseover(function() {
 		$(this).addClass("monsterrevealbg");


	});






});