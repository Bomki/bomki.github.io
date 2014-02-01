function Player (game, spriteName, spriteLocation, x, y, keyUp, keyDown, speed){
    
    this.sprite = null;
    
    this.preload = function () {
        game.load.image(spriteName, spriteLocation);
    };
    
    this.create = function () {
        this.sprite = game.add.sprite(x,y,spriteName);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;
        this.sprite.body.immovable = true;
        this.sprite.anchor.setTo(0.5, 0.5);
        this.keyUp = game.input.keyboard.addKey(keyUp);
        this.keyDown = game.input.keyboard.addKey(keyDown);
        this.speed = speed;
    };
    
    this.update = function () {
        this.sprite.body.velocity.y = 0;
        if(this.keyUp.isDown){
            this.sprite.body.velocity.y = -this.speed;
        }
        if(this.keyDown.isDown){
            this.sprite.body.velocity.y = this.speed;
        }
        game.physics.collide(this.sprite, ball1.sprite);
    };
}

var player1 = new Player(game,"player1", "assets/player1.png", 80, 384, Phaser.Keyboard.W, Phaser.Keyboard.S, 200);
var player2 = new Player(game,"player2", "assets/player2.png", 1280, 384, Phaser.Keyboard.I, Phaser.Keyboard.K, 200);