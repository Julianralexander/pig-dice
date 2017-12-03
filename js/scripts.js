function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.calculator = function(ticketPrice) {
  if (this.movie === "bladerunner") {
    ticketPrice += 3;
  } if (this.time === "matinee"){
    ticketPrice -= 2;
  } if (this.age === "senior") {
    ticketPrice -= 3;
  } if (this.age === "youth") {
    ticketPrice -= 1;
  }
  return ticketPrice;
};


$(document).ready(function() {
  $('#questions').submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var ticketPrice = 10;

    var inputtedMovie = $("#movies").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();

    var adjustedPrice = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    $(".result").append("<div id='resultDetails'>" +
                        "<h3>" + adjustedPrice.movie + "</h3>" +
                        "<h4>Your Showing: " + adjustedPrice.time + "</h4>" +
                        "<h5> Your ticket will cost $" + adjustedPrice.calculator(ticketPrice) + "</h5>"
                        + "</div>");


  });
});
