//Custom JavaScript louislugas.com
//kalo mau nambah javascript lewat sini aja


//SIDENAV
$(document).ready(function(){
	$('.button-collapse').sideNav();
});


//SLIDER INDEX.HTML
$(document).ready(function(){
      $('.slider').slider();
});

$(document).ready(function(){
	$('.dropdown-button').dropdown({
		hover: true
	});
});

//SLIDER WORK.HTML (KEYBOARD)
$(document).on("keydown", function(event) {
   	var x = event.keyCode;
    if (x == 37) {  // left
    	$('.project').animate({
        left: '+=150px',
		});
	} else if (x == 39) {  // right
		$('.project').animate({
        left: '-=150px',
		});
	}
});

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        $('.project').animate({
        left: '+=150px',
		},5);
    }
    else {
        $('.project').animate({
        left: '-=150px',
		},5);
    }
});