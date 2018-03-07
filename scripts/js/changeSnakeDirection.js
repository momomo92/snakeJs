document.addEventListener('keydown', changeSnakeDirection);

function changeSnakeDirection(event) {
    const keyCode = event.keyCode;
    const firstSnakeBody = snake[0];

    if (keyCode == 38) {
        firstSnakeBody.direction = directions.top;
        firstSnakeBody.positionOfChangeDirectory.push([firstSnakeBody.positionX, firstSnakeBody.positionY, directions.top]);
    } else if (keyCode == 39) {
        firstSnakeBody.direction = directions.right;
        firstSnakeBody.positionOfChangeDirectory.push([firstSnakeBody.positionX, firstSnakeBody.positionY, directions.right]);
    } else if (keyCode == 40) {
        firstSnakeBody.direction = directions.bottom;
        firstSnakeBody.positionOfChangeDirectory.push([firstSnakeBody.positionX, firstSnakeBody.positionY, directions.bottom]);
    } else if (keyCode == 37) {
        firstSnakeBody.direction = directions.left;
        firstSnakeBody.positionOfChangeDirectory.push([firstSnakeBody.positionX, firstSnakeBody.positionY, directions.left]);
    }
}