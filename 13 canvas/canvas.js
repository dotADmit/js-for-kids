var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(i * 10, i * 10, 10, 10);
// }
function drawMan() {
  ctx.fillRect(40, 0, 50, 50);
  ctx.fillRect(60, 50, 10, 20);
  ctx.fillRect(0, 70, 130, 10);
  ctx.fillRect(30, 80, 70, 50);
  ctx.fillRect(30, 130, 10, 60);
  ctx.fillRect(90, 130, 10, 60);
}
function drawFlag() {
  ctx.fillStyle = "SkyBlue";
  ctx.fillRect(0, 0, 50, 100);
  ctx.fillStyle = "PaleGreen";
  ctx.fillRect(50, 0, 50, 100);
  ctx.fillStyle = "Black";
  ctx.fillRect(100, 0, 50, 100);
}
// ctx.strokeStyle = "DeepPink";
// ctx.lineWidth = 4;
// ctx.strokeRect(10, 10, 100, 20);

// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(30, 20);
// ctx.lineTo(50, 10);
// ctx.moveTo(30, 0);
// ctx.lineTo(30, 50);
// ctx.stroke();

var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  fillCircle ? ctx.fill() : ctx.stroke();
}

ctx.lineWidth = 4;
ctx.strokeStyle = "Black";
circle(80, 50, 30);
circle(80, 120, 40);
circle(70, 40, 5, true);
circle(90, 40, 5, true);
circle(80, 100, 5, true);
circle(80, 120, 5, true);
circle(80, 140, 5, true);
ctx.fillStyle = "Orange";
circle(80, 50, 5, true);



