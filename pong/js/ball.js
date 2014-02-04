function Ball (game, spriteName, spriteLocation, x, y, startSpeedX, startSpeedY, accX, accY, timeoutAmount){
    
    this.sprite = Phaser.Sprite;
    this.x = x;
    this.y = y;
    this.accX = accX;
    this.accY = accY;
    this.spriteName = spriteName;
    this.spriteLocation = spriteLocation;
    this.resetBall = function(){
        this.create();
        
    this.timeoutAmount = timeoutAmount;
    this.timeout = null;
    };
    
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
        this.sprite.outOfBoundsKill = true;
        game.physics.collide(balls, walls);
        game.physics.collide(balls, players);

    };
    
    this.update = function () {

        if (game.time.time > this.timeout) {
            timeout = game.time.time + this.timeoutAmount; 
            
            if(this.sprite.body.velocity.x > 0){
                this.sprite.body.velocity.x += this.accX;
            }
        
            else if(this.sprite.body.velocity.x < 0){
                this.sprite.body.velocity.x -= this.accX;
            }
        
            if(this.sprite.body.velocity.y > 0){
                this.sprite.body.velocity.x += this.accY;
            }
        
            else if(this.sprite.body.velocity.y < 0){
                this.sprite.body.velocity.x -= this.accY;
            } 
            
        }

        
        
        
    };
}

var ball1 = new Ball(game, "ball1", "assets/ball.png", 680, 384, 5000, 400, 0, 0, 4000);