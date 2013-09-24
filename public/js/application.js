$(document).ready(function(){
  var game_length = $('tr:first').children().length;
  
  $(document).keyup(function(event){
    if (event.keyCode == 38) {
      move_player('#player1_strip');
      player_1_counter += 1;
    }
    if (event.keyCode == 32) {
      move_player('#player2_strip');
      player_2_counter += 1;
      console.log(player_2_counter);
    }
    if (player_1_counter == game_length) {
      alert("Player 1 wins!");
      player_1_counter += 1;
    }
    else if (player_2_counter == game_length) {
      alert("Player 2 wins!");
      player_2_counter += 1;
    }
  });
 
  // $.ajax({
  //   type: "POST",
  //   url: "/results/:id"
  // });

 // }
  // console.log(player);
  // $('38').keypress(move_player("#player1_strip"));
  // move_player("#player2_strip");
 
});
 
var move_player = function(player) {
  $('.racer_table').find(player).find('td.active').removeClass('active').next().addClass('active');
};
 
var player_1_counter = 1;
var player_2_counter = 1;
