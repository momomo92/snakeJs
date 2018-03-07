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
const snakeBodySize = 5;
const snakeBodyDistance = snakeBodySize + 1;
const snakeSpeed = 1;
let shouldEndGame = false;

let snake =[];
snake.push ({
    'positionX': (canvasWidth/2) - (snakeBodySize/2),
    'positionY': (canvasHeight/2) - (snakeBodySize/2),
    'changeDirectionsPoints': [],
    'direction': directions.right,
});

function playGame() {
    drawSnake();
    endGame();
}

function drawSnake() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    drawSnakeBody();
}

function endGame() {
    if (shouldEndGame) {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("GAME OVER", canvasWidth / 2 - 60, canvasHeight / 2);
        clearInterval(playInterval);
    }
}

const playInterval =setInterval(playGame, 15);