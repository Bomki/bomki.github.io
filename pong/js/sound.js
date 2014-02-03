function Sound(game, name, location ){
    
    this.name = name;
    this.sound = Phaser.Sound;
    this.location = location;
    
    this.preload = function(){
        game.load.audio(this.name, this.location);
    };
    
    this.create = function(){
        this.sound = game.add.audio(this.name);
        
    };
    
    this.update = function(){
        
    };
    
}

var hitSound = new Sound(game, "hitSound", "assets/hit.mp3");