var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var circle = function (x, y, radius, fillCircle) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	fillCircle ? ctx.fill() : ctx.stroke();
};

var Ball = function () {
	this.x = width / 2;
	this.y = height / 2;
	this.speed = 5;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.size = 10;
};

Ball.prototype.move = function () {
	this.x += this.xSpeed * this.speed;
	this.y += this.ySpeed * this.speed;

	if (this.x < this.size || this.x > width - this.size) {
		this.xSpeed = -this.xSpeed;
	} else if (this.y < this.size || this.y > height - this.size) {
		this.ySpeed = -this.ySpeed;
	}
};

Ball.prototype.draw = function () {
	circle(this.x, this.y, this.size, true);
}

Ball.prototype.setDirection = function (direction) {
	if (direction === 'up') {
		this.xSpeed = 0;
		this.ySpeed = -1;
	} else if (direction == 'down') {
		this.xSpeed = 0;
		this.ySpeed = 1;
	} else if (direction == 'left') {
		this.xSpeed = -1;
		this.ySpeed = 0;
	} else if (direction == 'right') {
		this.xSpeed = 1;
		this.ySpeed = 0;
	} else if (direction == 'stop') {
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
};

var ball = new Ball();

var keyActions = {
	32: 'stop',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	88: 'faster',
	90: 'slower',
	67: 'smaller',
	86: 'larger'
};

var speeds = {
	49: 1,
	50: 2,
	51: 3,
	52: 4,
	53: 5,
	54: 6,
	55: 7,
	56: 8,
	57: 9
}

$('body').keydown(function (event) {
	var action = keyActions[event.keyCode];
	if (speeds[event.keyCode])
		ball.speed = speeds[event.keyCode];
	if (action === 'slower' && ball.speed > 1)
		ball.speed--;
	else if (action === 'faster' && ball.speed < 11)
		ball.speed++;
	else if (action === 'smaller' && ball.size > 1)
		ball.size--;
	else if (action === 'larger' && ball.size < 40)
		ball.size++;
	ball.setDirection(action);
});




setInterval(function () {
	ctx.clearRect(0, 0, width, height);

	ball.draw();
	ball.move();

	ctx.strokeRect(0, 0, width, height);
}, 30);

