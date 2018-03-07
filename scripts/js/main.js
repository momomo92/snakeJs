function init() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");
    let game = new Game(context, canvas);
    game.init();
}

