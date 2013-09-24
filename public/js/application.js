$(document).ready(function(e){
  var game_length = $('tr:first').children().length;
  
  $(document).keyup(function(event){
    if (winner) {
      var stats = {winner: winner, loser: loser, time: end - start}
      $.post('/results', stats, function() {});
    }
    if (event.keyCode == 38) {
      move_player('#player1_strip');
      player_1_counter += 1;
    }
    if (event.keyCode == 32) {
      move_player('#player2_strip');
      player_2_counter += 1;
    }
    if (player_1_counter == game_length) {
      winner = $('#p1').text();
      loser = $('#p2').text();
    }
    else if (player_2_counter == game_length) {
      winner = $('#p2').text();
      loser = $('#p1').text();
    }

    

  });

});
 
var move_player = function(player) {
  $('.racer_table').find(player).find('td.active').removeClass('active').next().addClass('active');
};
 
var player_1_counter = 1;
var player_2_counter = 1;
var winner = false
var start = 0
var end = 0
