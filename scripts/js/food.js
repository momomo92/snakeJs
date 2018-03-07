function Food(context, canvas) {
    const that = this;
    this.canvas = canvas;
    this.context = context;
    this.size = 10;
    this.isset = false;
    this.position = {};

    this.init = function() {
        this.setFood();
    };

    this.setFood = function() {
        if (!this.isset){
            const positionX = Math.floor((Math.random() * this.canvas.width / this.size));
            const positionY = Math.floor((Math.random() * this.canvas.height / this.size));
            this.position = {
                'positionX': positionX,
                'positionY': positionY,
            };

            this.isset = true;
            this.drawFood();
        }
    };

    this.drawFood = function() {
        this.context.beginPath();
        this.context.rect(this.position.positionX * this.size, this.position.positionY * this.size, this.size, this.size);
        this.context.fillStyle = "#000000";
        this.context.fill();
        this.context.closePath();
    }
}