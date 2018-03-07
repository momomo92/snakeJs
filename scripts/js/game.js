function Game(context, canvas) {
    const that = this;
    this.canvas = canvas;
    this.context = context;
    this.snake = new Snake(this.context, this.canvas);
    this.food = new Food(this.context, this.canvas);
    this.points = 0;

    this.init = function() {
        this.welcomeScreen();
    };

    this.startGame = function() {
        this.snake.init();
        this.food.init();
        this.intervalId = setInterval(function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            that.displayPoints();

            if (that.snake.ate) {
                that.snake.eat();
                that.points++;
                that.food.isset = false;
                that.snake.ate = false;
            }

            if (!that.food.isset) {
                that.food.setFood();
            } else {
                that.food.drawFood();
            }

            if (that.snake.alive) {
                that.snake.move();
                that.snake.checkCollision(that.food);
            } else {
                that.endGame();
            }
        }, this.snake.speed);
    };

    this.displayPoints = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "10px Arial";
        context.fillStyle = "red";
        context.fillText("Point: " + this.points, 5, 10);
    };

    this.endGame = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("GAME OVER", this.canvas.width / 2 - 60, 140);

        context.font = "16px Arial";
        context.fillStyle = "red";
        context.fillText("Your points: " + this.points, this.canvas.width / 2 - 60, 170);

        context.font = "16px Arial";
        context.fillStyle = "red";
        context.fillText("Pres enter to star game!", this.canvas.width / 2 - 100, 200);
        clearInterval(this.intervalId);
        this.addKeyEvent(window);
    };

    this.welcomeScreen = function() {
        context.font = "18px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("Welcome on my snake game!", this.canvas.width / 2 - 140, 140);

        context.font = "16px Arial";
        context.fillStyle = "red";
        context.fillText("Pres enter to star game!", this.canvas.width / 2 - 110, 200);

        this.addKeyEvent(window);
    };

    this.addKeyEvent =function(window) {
        window.onkeydown = function(event) {
            const keyCode = event.keyCode;

            if (keyCode == 13) {
                that.resetData();
                that.startGame();
            }

            console.log(keyCode);
        }
    };

    this.resetData = function() {
        this.points = 0;
        this.food.isset = false;
        this.snake.alive = true;
        this.snake.snakeLenght = 1;
        this.snake.direction = this.snake.directions.right;
        this.snake.ate = false;
        this.snake.bodyPartsPosition = [];
    }
}