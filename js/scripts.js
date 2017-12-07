//Back End
function Player(name, roll, turnTotal, gameTotal) {
  this.name = name;
  this.roll = roll;
  this.turnTotal = turnTotal;
  this.gameTotal = gameTotal;
}

Player.prototype.randomNum = function() {
  var num = Math.floor(Math.random() * 5);
  num += 1;
  return num;
}

// Player.prototype.hold = function(result) {
//   this.gameTotal += this.turnTotal;
//   this.turnTotal = 0;
//   this.roll = 0;
//   player1Turn = !player1Turn;
// }

Player.prototype.addRoll = function() {
  if (this.roll === 1) {
    console.log("sky");
    this.turnTotal = 0;
  } else {
    this.turnTotal += this.roll;
    console.log("tar");
  }
}

//UI
$(document).ready(function() {

  // var turnTotal = 0;
  var newPlayer1 = new Player(name, 0, 0, 0);
  var newPlayer2 = new Player(name, 0, 0, 0);
  var player1Turn = true;


  $('#player1form').submit(function(event) {
    event.preventDefault();
    var player1Name = $("input#player1").val();

    $("#name1").text(player1Name);
  });

  $('#player2form').submit(function(event) {
    event.preventDefault();
    var player2Name = $("input#player2").val();

    $("#name2").text(player2Name);
  });

  $('#roll').click(function(){
    if (player1Turn === true) {
      newPlayer1.roll = newPlayer1.randomNum();
      newPlayer1.addRoll();
      console.log(newPlayer1);
    };
    // result = this.randomNum();
    // $("#result").text(result);
    // turnTotal = turnTotal + result;
    $("#turn-total").text(newPlayer1.turnTotal);
  });
  $('#hold').click(function(){
    console.log("this");
  });
});
