$(document).ready(function(){
        $('.slider').slider();
});

$(document).on( "keydown", function(event) {
   var x = event.keyCode;
    if (x == 37) {  // left
    	$("div").animate({
        left: '-=100px',
		}); 
	} else if (x == 39) {  // right
		$("div").animate({
        left: '+=100px',
		}); 
	}
});