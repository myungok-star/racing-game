$(document).ready(function() {

    var winner = null;
    //executeWinner function
    //TODO: move this to outside your document ready call
    function executeWinner() {
        alert("You are the WINNER!!!")
        $('#reset').removeClass('tmp-hidden');
    }

    //play again function
    //TODO: move this to outside your document ready call. you'll probably want to set winner as a global. use global convention WINNER
    function playAgain() {
        $('#reset').addClass('tmp-hidden');
        $('.player').css({
            left: 0
        });
        winner = null;

    }
    // TODO: remove unused code.
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
    // TODO: remove from document ready
    function movePlayer($player) {
        $player.animate({
            left: '+=30px'
        }, 'fast');

        //find the winner
        var currentPosition = $player.offset().left;
        /*$player.css({left: currentPosition + 30});*/
        // TODO: extract this conditional to a variable, makes it easier to understand
        if ($player.offset().left >= $('.game-board').width() - $player.width()) {
            // set winner to player and execute win
            winner = $player;
            executeWinner();
        }
    }

    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
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

    // TODO: adhere to a consistent convention for defining functions
    // TODO: move this to outside of document ready. Also, when you call race and have the above document keydown listener and window keypress listener executing, which runs first? Which should run first? Do they need to be separate?
    var race = function() {
        $(window).on('keypress', function(event) {
            if (!winner) {
                movePlayer(event);
            }
        });
        $('#reset').on('click', function() {
            playAgain();
        });
    };

    // start the race!
    race();

});
