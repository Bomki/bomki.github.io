function Score(game, x1, y1, x2, y2, p1Text, p2Text, p1Score, p2Score, ball1){
    
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.createText1 = Phaser.Text;
    this.createText2 = Phaser.Text;
    this.p1Text = p1Text;
    this.p2Text = p2Text;
    this.p1Score = p1Score;
    this.p2Score = p2Score;
    this.ball1 = ball1;
    
    this.preload = function(){
        
    };
    
    this.create = function(){
    
        this.createText1 = game.add.text(this.x1, this.y1, this.p1Text + this.p1Score, { font: "32px Arial", fill: "#62ff00"});
        this.createText1.anchor.setTo(0.5,1);
        
        this.createText2 = game.add.text(this.x2, this.y2, this.p2Text + this.p2Score, { font: "32px Arial", fill: "#f00000"});
        this.createText2.anchor.setTo(0.5,1);
         
    };
    
    this.update = function(){
        
        if(this.ball1.sprite.body.x > 1360 && this.ball1.sprite.alive === false){
            
            this.p1Score++;
            this.ball1.resetBall();
            this.createText1.content = this.p1Text + this.p1Score;
        }
        
        
        if(this.ball1.sprite.body.x < 0 && this.ball1.sprite.alive === false){
            
            this.p2Score++;
            this.ball1.resetBall();
            this.createText2.content = this.p2Text + this.p2Score;
        }
        
        
        
        
        
    };
    
}

var score1 = new Score(game, 320, 96, 1040, 96, "Player 1: ", "Player 2: ", 0, 0, ball1);