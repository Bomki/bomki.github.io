function Player (game, spriteName, spriteLocation, x, y, keyUp, keyDown, speed){
    
    this.sprite = Phaser.Sprite;
    this.x = x;
    this.y = y;
    this.spriteName = spriteName;
    this.spriteLocation = spriteLocation;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
    this.speed = speed;
    
    this.preload = function () {
        game.load.image(this.spriteName, this.spriteLocation);
    };
    
    this.create = function () {
        this.sprite = players.create(this.x, this.y, this.spriteName);
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;
        this.sprite.body.immovable = true;
        this.sprite.anchor.setTo(0.5, 0.5);
        this.keyUp = game.input.keyboard.addKey(this.keyUp);
        this.keyDown = game.input.keyboard.addKey(this.keyDown);

        
    };
    
    this.update = function () {
        game.physics.collide(players, balls);
        this.sprite.body.velocity.y = 0;
        if(this.keyUp.isDown && this.sprite.body.y > 16){
            this.sprite.body.velocity.y = -this.speed;
        }
        if(this.keyDown.isDown && this.sprite.body.y < 560){
            this.sprite.body.velocity.y = this.speed;
        }
    };
}

var player1 = new Player(game,"player1", "assets/player1.png", 80, 384, Phaser.Keyboard.W, Phaser.Keyboard.S, 200);
var player2 = new Player(game,"player2", "assets/player2.png", 1280, 384, Phaser.Keyboard.I, Phaser.Keyboard.K, 200);