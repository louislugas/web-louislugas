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


//SLIDER WORK.HTML (KEYBOARD)
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

//SLIDER WORK.HTML (BUTTON)
$(document).ready(function(){
    $(".btnright").click(function(){
        $(".project").animate({
        	left: "+=150px",
        });
    });
    $(".btnleft").click(function(){
        $(".project").animate({
        	left: "-=150px",
        });
    });
});
