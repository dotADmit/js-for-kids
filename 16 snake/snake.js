let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

let score = 0;

let drawBorder = () => {
	ctx.fillStyle = 'Gray';
	ctx.fillRect(0, 0, width, blockSize);
	ctx.fillRect(0, height - blockSize, width, blockSize);
	ctx.fillRect(0, 0, blockSize, height);
	ctx.fillRect(width - blockSize, 0, blockSize, height);
}

let drawScore = () => {
	ctx.font = '20px Courier';
	ctx.fillStyle = 'Black';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText(`Score: ${score}`, blockSize, blockSize);
}

let gameOver = () => {
	// clearInterval(intervalId);
	playing = false;
	ctx.font = widthInBlocks + 'px Courier';
	ctx.fillStyle = 'Black';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('Game over', width / 2, height / 2);
}

let circle = function (x, y, radius, fillCircle) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	fillCircle ? ctx.fill() : ctx.stroke();
};

let Block = function (col, row) {
	this.col = col;
	this.row = row;
}

Block.prototype.drawSquare = function (color) {
	let x = this.col * blockSize;
	let y = this.row * blockSize;
	ctx.fillStyle = color;
	ctx.fillRect(x, y, blockSize, blockSize);
}

Block.prototype.drawCircle = function (color) {
	let centerX = this.col * blockSize + blockSize / 2;
	let centerY = this.row * blockSize + blockSize / 2;
	ctx.fillStyle = color;
	circle(centerX, centerY, blockSize / 2, true);
}

Block.prototype.equal = function (otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;
}

let Snake = function () {
	this.segments = [
		new Block(7, 5),
		new Block(6, 5),
		new Block(5, 5)
	];

	this.direction = 'right';
	this.nextDirection = 'right';
}

Snake.prototype.draw = function () {
	this.segments[0].drawSquare('Green');

	for (let i = 1; i < this.segments.length; i++) {
		i % 2 === 0 ? this.segments[i].drawSquare('Red')
								: this.segments[i].drawSquare('Black');
	}

}

Snake.prototype.move = function () {
	let head = this.segments[0];
	let newHead;

	this.direction = this.nextDirection;

	if (this.direction === 'right') {
		newHead = new Block(head.col + 1, head.row);
	} else if (this.direction === 'down') {
		newHead = new Block(head.col, head.row + 1);
	} else if (this.direction === 'left') {
		newHead = new Block(head.col - 1, head.row);
	} else if (this.direction === 'up') {
		newHead = new Block(head.col, head.row - 1);
	}

	if (this.checkCollision(newHead)) {
		gameOver();
		return;
	}

	this.segments.unshift(newHead);

	if (newHead.equal(apple.position)) {
		score++;
		apple.move(this.segments);
	} else {
		this.segments.pop();
	}
}

Snake.prototype.checkCollision = function (head) {
	let leftCollision = (head.col === 0);
	let topCollision = (head.row === 0);
	let rightCollision = (head.col === widthInBlocks - 1);
	let bottomCollision = (head.row === heightInBlocks - 1);

	let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

	let selfCollision = false;

	for (let i = 0; i < this.segments.length; i++) {
		if (head.equal(this.segments[i]))
			selfCollision = true;
	}

	return wallCollision || selfCollision;
}

Snake.prototype.setDirection = function (newDirection) {
	if (this.direction === 'up' && newDirection === 'down') {
		return;
	} else if (this.direction === "right" && newDirection === "left") {
		return;
	} else if (this.direction === "down" && newDirection === "up") {
		return;
	} else if (this.direction === "left" && newDirection === "right") {
		return;
	}

	this.nextDirection = newDirection;
}

let Apple = function () {
	this.position = new Block(10, 10);
}

Apple.prototype.draw = function () {
	this.position.drawCircle('LimeGreen');
}

Apple.prototype.move = function (snakeBlocks) {
	let rightDirection = true;
	while (rightDirection) {
		let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
		let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
		this.position = new Block(randomCol, randomRow);

		for (let i = 0; i < snakeBlocks.length; i++) {
			if (!this.position.equal(snakeBlocks[i])) {
				rightDirection = false;
				break;
			}
		}
	}
}

let snake = new Snake();
let apple = new Apple();

/*
let intervalId = setInterval(() => {
	ctx.clearRect(0, 0, width, height);
	drawScore();
	snake.move();
	snake.draw();
	apple.draw();
	drawBorder();
}, 100);
*/
let playing = true;
let animationTime = 100;

let gameLoop = function () {
	ctx.clearRect(0, 0, width, height);
	drawScore();
	snake.move();
	snake.draw();
	apple.draw();
	drawBorder();

	if (playing)
		setTimeout(gameLoop, animationTime - score * 2);
};
gameLoop();

let directions = {
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};

$('body').keydown(function (event) {
	let newDirection = directions[event.keyCode];
	if (newDirection)
		snake.setDirection(newDirection);
})





