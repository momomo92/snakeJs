function moveSnake() {
    snake.forEach(changeSnakePosition);
}

function changeSnakePosition(snakeBody, bodyNumber) {
    let positionX = snake[bodyNumber].positionX;
    let positionY = snake[bodyNumber].positionY;

    if (bodyNumber > 0) {
        const positionOfChangeDirectory = snake[bodyNumber - 1].positionOfChangeDirectory[0];

        if (typeof positionOfChangeDirectory !== 'undefined'){
            if (positionX == positionOfChangeDirectory[0] && positionY == positionOfChangeDirectory[1]) {
                const chaneDirectionDestination = positionOfChangeDirectory[2];
                snake[bodyNumber].positionOfChangeDirectory.push(positionOfChangeDirectory);
                snake[bodyNumber].direction = chaneDirectionDestination;
                snake[bodyNumber - 1].positionOfChangeDirectory.shift();
            }
        }

    }

    if (snakeBody.direction == directions.right) {
        positionX += snakeSpeed;
        snakeBody.positionX = positionX;

        if (bodyNumber == 0) {
            if (positionX + snakeBodySize > canvasWidth) {
                shouldEndGame = true;
            }
        }
    } else if (snakeBody.direction == directions.left) {
        positionX -= snakeSpeed;
        snakeBody.positionX = positionX;

        if (bodyNumber == 0) {
            if (positionX < 0) {
                shouldEndGame = true;
            }
        }
    } else if (snakeBody.direction == directions.top) {
        positionY -= snakeSpeed;
        snakeBody.positionY = positionY;

        if (bodyNumber == 0) {
            if (positionY < 0) {
                shouldEndGame = true;
            }
        }
    } else if (snakeBody.direction == directions.bottom) {
        positionY += snakeSpeed;
        snakeBody.positionY = positionY;

        if (bodyNumber == 0) {
            if (positionY + snakeBodySize > canvasHeight) {
                shouldEndGame = true;
            }
        }
    }
}