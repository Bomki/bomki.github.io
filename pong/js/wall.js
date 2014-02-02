function Wall(game, spriteName, spriteLocation, x, y){
    
    this.sprite = Phaser.Sprite;
    this.spriteName = spriteName;
    this.spriteLocation = spriteLocation;
    this.x = x;
    this.y = y;
    
    this.preload = function(){
        game.load.image(this.spriteName, this.spriteLocation);
    };
    
    this.create = function(){
        this.sprite = walls.create(this.x, this.y, this.spriteName);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;
        this.sprite.body.immovable = true;
    };
    
    this.update = function(){
        
    };
    
}

var wall1 = new Wall(game, "wall1", "assets/wall.png", 680, 768);
var wall2 = new Wall(game, "wall2", "assets/wall.png", 680, 0);