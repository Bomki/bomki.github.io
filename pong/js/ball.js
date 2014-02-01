function Ball (game, spriteName, spriteLocation, x, y, startSpeedX, startSpeedY){
    
    this.sprite = null;
    
    this.preload = function () {
        game.load.image(spriteName, spriteLocation);
    };
    
    this.create = function () {
        this.sprite = game.add.sprite(x,y,spriteName);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;
        this.sprite.anchor.setTo(0.5, 0.5);
        this.startSpeedX = startSpeedX;
        this.startSpeedY = startSpeedY;
        this.randomMoveX = Math.random() < 0.5 ? -1 : 1;
        this.randomMoveY = Math.random() < 0.5 ? -1 : 1;
        this.released = false;
        this.sprite.body.velocity.x = this.randomMoveX * this.startSpeedX;
        this.sprite.body.velocity.y = this.randomMoveY * this.startSpeedY;

    };
    
    this.update = function () {
        
    };
}

var ball1 = new Ball(game, "ball1", "assets/ball.png", 680, 339, 700, 100);