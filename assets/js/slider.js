$(document).ready(function(){
        $('.slider').slider();
    });

$(document).keydown(function(event) {
    switch (event.which) {
        case 37: // left arrow key
           $('#div').animate({ 'left': '-=100' });
           break;
        case 39: // right arrow key
           $('#div').animate({ 'left': '+=100' });
           break;
    }
});