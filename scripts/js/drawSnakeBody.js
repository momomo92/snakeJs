function drawSnakeBody() {
    snake.forEach(draw);
}

function draw(snakeBody) {
    context.beginPath();
    context.rect(snakeBody.positionX, snakeBody.positionY, snakeBodySize, snakeBodySize);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}