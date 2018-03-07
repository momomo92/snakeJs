document.addEventListener('keydown', changeSnakeDirection);

function changeSnakeDirection(event) {
    const keyCode = event.keyCode;
    const firstSnakeBody = snake[0];
    let direction;

    if (keyCode == 38) {
        direction = directions.top;
    } else if (keyCode == 39) {
        direction = directions.right;
    } else if (keyCode == 40) {
        direction = directions.bottom;
    } else if (keyCode == 37) {
        direction = directions.left;
    }


    firstSnakeBody.direction = direction;
    firstSnakeBody.changeDirectionsPoints.push([firstSnakeBody.positionX, firstSnakeBody.positionY, direction]);
}