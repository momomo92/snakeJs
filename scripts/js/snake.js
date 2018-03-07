function Snake(context, canvas) {
    const that = this;
    this.canvas = canvas;
    this.context = context;
    this.alive = true;
    this.bodyPartsPosition = [];
    this.directions = {
        'top': 1,
        'right': 2,
        'bottom': 3,
        'left': 4,
    };
    this.direction = this.directions.right;
    this.snakeLenght = 1;
    this.snakeSize = 10;
    this.speed = 100;
    this.ate = false;

    this.init = function() {
        for(let position = 0; position < this.snakeLenght; position++) {
            this.bodyPartsPosition.push({
                'positionX': position,
                'positionY': 0,
            });
        }
        this.controlSnake(window);
    };

    this.controlSnake = function(window) {
        window.onkeydown = function(event) {
            const keyCode = event.keyCode;

            if (keyCode == 38) {
                if (that.direction !=that.directions.bottom) {
                    that.direction = that.directions.top;
                }
            } else if (keyCode == 39) {
                if (that.direction !=that.directions.left) {
                    that.direction = that.directions.right;
                }
            } else if (keyCode == 40) {
                if (that.direction !=that.directions.top) {
                    that.direction = that.directions.bottom;
                }
            } else if (keyCode == 37) {
                if (that.direction !=that.directions.right) {
                    that.direction = that.directions.left;
                }
            }
        }
    };

    this.checkCollision = function(food) {
        const head = this.bodyPartsPosition[this.snakeLenght - 1];

        if (head.positionX * this.snakeSize >= this.canvas.width || head.positionX < 0) {
            this.alive = false
        }

        if (head.positionY * this.snakeSize >= this.canvas.height || head.positionY < 0) {
            this.alive = false
        }

        for (let bodyPart = this.snakeLenght - 2; bodyPart >= 0; bodyPart--) {
            if (this.bodyPartsPosition[bodyPart].positionX * this.snakeSize == head.positionX * this.snakeSize
                && this.bodyPartsPosition[bodyPart].positionY * this.snakeSize == head.positionY * this.snakeSize) {
                this.alive = false;
            }
        }


        if (head.positionX == food.position.positionX && head.positionY == food.position.positionY) {
            this.ate = true;
        }
    };

    this.eat = function() {
        this.snakeLenght++;
        this.bodyPartsPosition.unshift({
            'positionX': 0,
            'positionY': 0,
        });
    };

    this.move = function() {
        this.updatePosition();
        this.drawSnake();
    };

    this.updatePosition = function() {
        const firstBodyPart = this.snakeLenght - 1;
        let positionX = this.bodyPartsPosition[firstBodyPart].positionX;
        let positionY = this.bodyPartsPosition[firstBodyPart].positionY;
        let previousPositionX = positionX;
        let previousPositionY = positionY;

        if (this.direction == this.directions.right) {
            this.bodyPartsPosition[firstBodyPart].positionX++;
        } else if (this.direction == this.directions.left) {
            this.bodyPartsPosition[firstBodyPart].positionX--;
        } else if (this.direction == this.directions.top) {
            this.bodyPartsPosition[firstBodyPart].positionY--;
        } else if (this.direction == this.directions.bottom) {
            this.bodyPartsPosition[firstBodyPart].positionY++;
        }

        for (let bodyPart = this.snakeLenght - 2; bodyPart >= 0; bodyPart--) {
            positionX = this.bodyPartsPosition[bodyPart].positionX;
            positionY = this.bodyPartsPosition[bodyPart].positionY;
            this.bodyPartsPosition[bodyPart].positionX = previousPositionX;
            this.bodyPartsPosition[bodyPart].positionY = previousPositionY;
            previousPositionX = positionX;
            previousPositionY = positionY;
        }
    };

    this.drawSnake = function() {
        for (let bodyPart = 0; bodyPart < this.snakeLenght; bodyPart++) {
            this.context.beginPath();
            this.context.rect(this.bodyPartsPosition[bodyPart].positionX * this.snakeSize,
                this.bodyPartsPosition[bodyPart].positionY * this.snakeSize, this.snakeSize, this.snakeSize);
            this.context.fillStyle = "#0095DD";
            this.context.fill();
            this.context.closePath();
        }
    };
}