function Game(context, canvas) {
    const that = this;
    this.canvas = canvas;
    this.context = context;
    this.snake = new Snake(this.context, this.canvas);
    this.food = new Food(this.context, this.canvas);

    this.init = function() {
        this.startGame();
    };

    this.startGame = function() {
        this.snake.init();
        this.food.init();
        this.intervalId = setInterval(function() {
            console.info();
            context.clearRect(0, 0, canvas.width, canvas.height);

            if (that.snake.ate) {
                that.snake.eat();
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

    this.endGame = function() {
        context.font = "16px Arial";
        context.fillStyle = "#0095DD";
        context.fillText("GAME OVER", this.canvas.width / 2 - 60, this.canvas.height / 2);
        clearInterval(this.intervalId);
    };
}