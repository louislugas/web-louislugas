//Custom JavaScript louislugas.com
//kalo mau nambah javascript lewat sini aja

$(document).ready(function(){
	$('.button-collapse').sideNav();
});

$(document).ready(function(){
	$('.slider').slider();
});

$(document).on("keydown", function(event) {
   	var x = event.keyCode;
    if (x == 37) {  // left
    	$(".project").animate({
        left: '-=150px',
		}); 
	} else if (x == 39) {  // right
		$(".project").animate({
        left: '+=150px',
		}); 
	}
});