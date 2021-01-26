var direction = "right";
var counter = 0;
var interval = 120;
var clicks = 0;

$("#main-heading").offset({ left: counter, top: counter });

var move = function () {
  if (direction === "right") {
    $("#main-heading").offset({ left: counter });
    counter++;
    if (counter === 200) {
      direction = "bottom";
      counter = 0;
    }
  } else if (direction === "bottom") {
    $("#main-heading").offset({ top: counter });
    counter++;
    if (counter === 200)
      direction = "left";
  } else if (direction === "left") {
    $("#main-heading").offset({ left: counter });
    counter--;
    if (counter === 0) {
      direction = "up";
      counter = 200;
    }
  } else {
    $("#main-heading").offset({ top: counter });
    counter--;
    if (counter === 0) {
      direction = "right";
    }
  }
}

var intervalId = setInterval(move, interval);

$("h1").click(function () {
  clearInterval(intervalId);
  interval /= 2;
  clicks++;

  if (clicks > 10) {
    $("h1").text("You Win.");
  } else {
    intervalId = setInterval(move, interval);
    $("h1").text(11 - clicks);
  }
  }
)

