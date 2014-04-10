$(document).ready(function() {

// Let's hide some shiz
	$( "p.clicky" ).click(function() {
 	 $(this).addClass("hide");
	});

//The text is a bit hard to read, no?
$( "p.colorfix" ).click(function() {
 	 $(this).addClass("colorchange");
 	 
	});

//This box color just doesn't mesh
$( ".meshbox" ).click(function() {
 	 $(this).addClass("betterboxcolor");
 	 
	});

//I need to tell you something about Calvin
$( ".secretmessage" ).click(function() {
 	 $(this).append("Calvin is a big cuddly teddy bear");
 	 
	});






});