const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const directions = {
    'top': 1,
    'right': 2,
    'bottom': 3,
    'left': 4,
};
let shouldEndGame = false;
const snakeBodySize = 5;
const snakeSpeed = 1;

let snake =[];
snake.push ({
    'positionX': (canvasWidth/2) - (snakeBodySize/2),
    'positionY': (canvasHeight/2) - (snakeBodySize/2),
    'direction': directions.right,
});

document.addEventListener('keydown', changeSnakeDirection);

function changeSnakeDirection(event) {
    const keyCode = event.keyCode;
    const firstSnakeBody = snake[0];

    if (keyCode == 38) {
        firstSnakeBody.direction = directions.top;
    } else if (keyCode == 39) {
        firstSnakeBody.direction = directions.right;
    } else if (keyCode == 40) {
        firstSnakeBody.direction = directions.bottom;
    } else if (keyCode == 37) {
        firstSnakeBody.direction = directions.left;
    }
}

function playGame() {
    drawSnake();
    endGame();
}

function drawSnake() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    drawSnakeBody();
}

function moveSnake() {
    const snakeBody = snake[0];

    if (snakeBody.direction == directions.right) {
        const positionX = snakeBody.positionX + snakeSpeed;

        if (positionX < canvasWidth) {
            snakeBody.positionX = positionX;
        } else {
            shouldEndGame = true;
        }
    } else if (snakeBody.direction == directions.left) {
        const positionX = snakeBody.positionX - snakeSpeed;

        if (positionX > 0) {
            snakeBody.positionX = positionX;
        } else {
            shouldEndGame = true;
        }
    } else if (snakeBody.direction == directions.top) {
        const positionY = snakeBody.positionY - snakeSpeed;

        if (positionY > 0) {
            snakeBody.positionY = positionY;
        } else {
            shouldEndGame = true;
        }
    } else if (snakeBody.direction == directions.bottom) {
        const positionY = snakeBody.positionY + snakeSpeed;

        if (positionY < canvasHeight) {
            snakeBody.positionY = positionY;
        } else {
            shouldEndGame = true;
        }
    }
}

function drawSnakeBody() {
    const snakeBody = snake[0];
    context.beginPath();
    context.rect(snakeBody.positionX, snakeBody.positionY, snakeBodySize, snakeBodySize);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function endGame() {
    if (shouldEndGame) {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("GAME OVER", canvasWidth / 2 - 60, canvasHeight / 2);
        clearInterval(playInterval);
    }
}

const playInterval =setInterval(playGame, 20);