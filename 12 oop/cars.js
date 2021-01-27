var Car = function (x, y) {
  this.x = x;
  this.y = y;

  this.draw();
}

// var drawCar = function (car) {
//   var carHtml = '<img src="http://nostarch.com/images/car.png">';
//   var carElement = $(carHtml);

//   carElement.css({
//     position: "absolute",
//     left: car.x,
//     top: car.y
//   });

//   $("body").append(carElement);
// }

Car.prototype.draw = function () {
  var carHtml = '<img src="http://nostarch.com/images/car.png">';

  this.carElement = $(carHtml);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });

  $("body").append(this.carElement);
}

Car.prototype.moveRight = function (speed) {
  this.x += speed;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
}
Car.prototype.moveLeft = function (speed) {
  this.x -= speed;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
}
Car.prototype.moveUp = function (speed) {
  this.y -= speed;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
}
Car.prototype.moveDown = function (speed) {
  this.y += speed;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
}

var tesla = new Car(20, 20);
var nissan = new Car(20, 200);

setInterval(function() {
  tesla.moveRight(Math.floor(Math.random() * 6));
  nissan.moveRight(Math.floor(Math.random() * 6));
}, 30);





