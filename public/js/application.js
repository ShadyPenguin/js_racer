$(document).ready(function(){

  var game_length = $('tr:first').children().length;
  
  // // AJAX kind of working below

  // $('#start').on('submit', function(event) { 
  //   event.preventDefault();

  //   var data = { pup_1: $('play_1').text(), 
  //     pup_2: $('play_2').text() };
  //     console.log(data);
  //   $.post('/game', data, function(response) {
  //     $('body').replaceWith(response);
  //   });
  // });

  // // END AJAX
    
      
  $(document).keyup(function(event) {

    if (!winner) {

      if (event.keyCode == 13) {
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
        player_1_counter += 1
        
        var stats = {winner: winner, loser: loser}
        $.post('/results', stats, function(response) {
          $('body').replaceWith(response);
        });
      }
      else if (player_2_counter == game_length) {
        winner = $('#p2').text();
        loser = $('#p1').text();
        player_2_counter += 1

        var stats = {winner: winner, loser: loser}
        $.post('/results', stats, function(response) {
          $('body').replaceWith(response);
        });
      }
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
