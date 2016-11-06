$(document).ready(function () {


  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      //player-top: when "a" is clicked, move to the right
       case 65:
				$('#player-top').animate({left: "+=25px"}, 'fast');
        break;
      //player-bottom: when "l" is clicked, move to the right
      case 76:
        $('#player-bottom').animate({left: "+=25px"}, 'fast');
        break;
}
  });






});
