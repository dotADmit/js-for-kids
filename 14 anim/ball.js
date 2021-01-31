var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var pickRandomColor = () => {
	var colors = ["Red", "Orange", "Gold", "Green", "Blue", "Purple"];
	return colors[Math.floor(Math.random() * colors.length)];
}
var Ball = function () {
	this.x = 100;
	this.y = 100;
	this.xSpeed = Math.random() * 10 - 5;
	this.ySpeed = Math.random() * 10 - 5;
	this.color = pickRandomColor();
	};

var circle = (x, y, radius, fillCircle) => {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	fillCircle ? ctx.fill() : ctx.stroke();
};

Ball.prototype.draw = function () {
	ctx.fillStyle = this.color;
	circle(this.x, this.y, 4, true);
	};

Ball.prototype.move = function () {
	this.x += this.xSpeed;
	this.y += this.ySpeed;
}

Ball.prototype.checkCollision = function () {
	if (this.x < 0 || this.x > canvas.width)
	 this.xSpeed = -this.xSpeed;
	if (this.y < 0 || this.y > canvas.height)
	 this.ySpeed = -this.ySpeed;
}

var balls = [];
for (let i = 0; i < 20; i++) {
	balls[i] = new Ball();
}

var ball = new Ball();

setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < balls.length; i++){
		balls[i].draw();
		balls[i].move();
		balls[i].checkCollision();
	}

	ctx.strokeRect(0, 0, canvas.width, canvas.height);
}, 30);