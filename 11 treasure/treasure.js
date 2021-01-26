var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
}

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffY * diffY) + (diffX * diffX));
}

var getDistanceHint = function (distance) {
  if (distance < 10) {
    return "You'll burn!";
  } else if (distance < 20) {
    return "Very hot";
  } else if (distance < 40) {
    return "Hot";
  } else if (distance < 80) {
    return "Warm";
  } else if (distance < 120) {
    return "Absolute zero";
  } else if (distance < 160) {
    return "Cold";
  } else if (distance < 320) {
    return "Very cold";
  } else if (distance < 640) {
    return "Very very cold";
  } else {
    return "You'll freeze!";
  }
}

var width = 600;
var height = 600;
var clicks = 0;
var hardSet = 15;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}

$("#map").click(function (event) {
  if (clicks < hardSet) {
    clicks++;
    var distance = getDistance(event, target);
    $("h3").text((getDistanceHint(distance)) + ", clicks left: " + (hardSet - clicks));

    if (distance < 8) {
      alert("The treasure is found! Clicks made " + clicks);
      $("h3").text("Congratulations!!!");
    }
    if (clicks >= hardSet) {
      alert("You died!");
      $("h3").text("You lose..");
    }
  }
});








