//Back End
function Player(name, roll, turnTotal, gameTotal, myTurn) {
  this.name = name;
  this.roll = roll;
  this.turnTotal = turnTotal;
  this.gameTotal = gameTotal;
  this.myTurn = myTurn;
}

Player.prototype.randomNum = function() {
  var num = Math.floor(Math.random() * 5);
  num += 1;
  return num;
}

Player.prototype.hold = function() {
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;
  this.roll = 0;
  this.myTurn = !this.myTurn;
}

Player.prototype.addRoll = function() {
  if (this.roll === 1) {
    console.log("sky");
    this.turnTotal = 0;
    this.myTurn = !this.myTurn;
  } else {
    this.turnTotal += this.roll;
    console.log("tar");
  }
}

//UI
$(document).ready(function() {

  // var turnTotal = 0;
  var newPlayer1 = new Player(name, 0, 0, 0, true);
  var newPlayer2 = new Player(name, 0, 0, 0, false);
  var player1Turn = true;

//Player 1 Disply Function
  $('#player1form').submit(function(event) {
    event.preventDefault();
    var player1Name = $("input#player1").val();
    $("#player1form").hide();
    newPlayer1.name = player1Name;
    $("#name1").text(player1Name);
  });
//Player 2 Disply Function
  $('#player2form').submit(function(event) {
    event.preventDefault();
    var player2Name = $("input#player2").val();
    $("#player2form").hide();
    newPlayer2.name = player2Name;
    $("#name2").text(player2Name);
  });

  $('#roll').click(function(){
    if (newPlayer1.myTurn === true) {
      newPlayer1.roll = newPlayer1.randomNum();
      newPlayer1.addRoll();
      $("#result").text(newPlayer1.roll);
      $("#turn-total").text(newPlayer1.turnTotal);
      console.log(newPlayer1);
    } else {
      newPlayer2.roll = newPlayer2.randomNum();
      newPlayer2.addRoll();
      $("#result").text(newPlayer2.roll);
      $("#turn-total").text(newPlayer2.turnTotal);
      console.log(newPlayer2);

    }

  });


  $('#hold').click(function(){

  });
});
