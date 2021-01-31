var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;

var circle = (x, y, radius, fillCircle) => {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	fillCircle ? ctx.fill() : ctx.stroke();
}

function drawBee(x, y) {
	ctx.lineWidth = 2;
	ctx.strokeStyle = "Black";
	ctx.fillStyle = "Gold";

	circle(x, y, 8, true);
	circle(x, y, 8, false);
	circle(x - 5, y - 11, 5, false);
	circle(x + 5, y - 11, 5, false);
	circle(x - 2, y - 1, 2, false);
	circle(x + 2, y - 1, 2, false);
}

var update = (coordinate) => {
	var offset = Math.random() * 4 - 2;
	coordinate += offset;

	if (coordinate > 200)
		coordinate = 200;

	if (coordinate < 0)
		coordinate = 0;

	return coordinate;
}

setInterval(() => {
	ctx.clearRect(0, 0, 200, 200);

	drawBee(x, y);
	x = update(x);
	y = update(y);

	ctx.strokeRect(0 ,0, 200, 200);
}, 30);




