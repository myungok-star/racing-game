$(document).ready(function () {

//first attempt of moving players
/*  $(document).keydown(function(key) {
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
  });*/

//second version
  function movePlayer($player) {
    $player.animate({ left: '+=25px' }, 'fast');
    // check new position
  }

  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      //player-top: when "a" is clicked, move to the right
      case 65:
        movePlayer($('#player-top'));
        break;
      //player-bottom: when "l" is clicked, move to the right
      case 76:
        movePlayer($('#player-bottom'));
        break;
    }
  });

  //executeWinner function
  function excuteWinner() {
    alert("Yay!!!")
    $('#reset').removeClass('tmp-hidden');
  }

  //play again function
  function playAgain() {
    $("#reset").addClass('tmp-hidden');
    $('.player').css({left: 0});
  }








});
