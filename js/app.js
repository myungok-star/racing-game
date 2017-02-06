$(document).ready(function() {

    var winner = null;
    //executeWinner function
    function executeWinner() {
        alert("You are the WINNER!!!")
        $('#reset').removeClass('tmp-hidden');
        $('.player').css({left: 0});
    }

    //play again function
    function playAgain() {
        $('#reset').addClass('tmp-hidden');
        $('.player').css({left: 0});
        winner = null;

    }

    function movePlayer($player) {
        $player.animate({left: '+=30px'}, 'fast');

        //find the winner
        var currentPosition = $player.offset().left;
        /*$player.css({left: currentPosition + 30});*/
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
