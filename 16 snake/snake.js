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

var drawScore = () => {
	ctx.font = '20px Courier';
	ctx.fillStyle = 'Black';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText(`Score: ${score}`, blockSize, blockSize);
}

var gameOver = () => {
	clearInterval(intervalId);
	ctx.font = '60px Courier';
	ctx.fillStyle = 'Black';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('Game over', width / 2, height / 2);
}

setInterval(() => {
	ctx.clearRect(0, 0, width, height);
	drawBorder();
	drawScore();
	score++;
}, 100);


