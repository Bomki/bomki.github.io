function Ball (game, spriteName, spriteLocation, x, y, startSpeedX, startSpeedY){
    
    this.sprite = Phaser.Sprite;
    this.x = x;
    this.y = y;
    this.spriteName = spriteName;
    this.spriteLocation = spriteLocation;
    
    this.preload = function () {
        game.load.image(this.spriteName, this.spriteLocation);
    };
    
    this.create = function () {
        this.sprite = balls.create(this.x, this.y, this.spriteName);
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;
        this.sprite.anchor.setTo(0.5, 0.5);
        this.startSpeedX = startSpeedX;
        this.startSpeedY = startSpeedY;
        this.randomMoveX = Math.random() < 0.5 ? -1 : 1;
        this.randomMoveY = Math.random() < 0.5 ? -1 : 1;
        this.sprite.body.velocity.x = this.randomMoveX * this.startSpeedX;
        this.sprite.body.velocity.y = this.randomMoveY * this.startSpeedY;
        

    };
    
    this.update = function () {
        game.physics.collide(balls, walls);
        if(this.sprite.body.x >= 1344){
            console.log("Player 1 scored!");
        }
        if(this.sprite.body.x <= 0){
            console.log("Player 2 scored!");
        }
    };
}

var ball1 = new Ball(game, "ball1", "assets/ball.png", 680, 384, 700, 100);