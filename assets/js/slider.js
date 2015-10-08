$(document).ready(function(){
        $('.slider').slider();
});

$(document).on( "keydown", function(event) {
   var x = event.keyCode;
    if (x == 37) {  // left
    	$(".project").animate({
        left: '-=100px',
		}); 
	} else if (x == 39) {  // right
		$(".project").animate({
        left: '+=100px',
		}); 
	}
});