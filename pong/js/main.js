var game = new Phaser.Game(1360, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var players;
var balls;
var walls;

function preload(){
    players = game.add.group();
    balls = game.add.group();
    walls = game.add.group();
    player1.preload();
    player2.preload();
    score1.preload();
    ball1.preload();
    wall1.preload();
    wall2.preload();
    hitSound.preload();
    wallHitSound.preload();
}

function create(){
    score1.create();
    player1.create();
    player2.create();
    ball1.create();
    wall1.create();
    wall2.create();
    hitSound.create();
    wallHitSound.create();
}

function update(){
    
    player1.update();
    player2.update();
    ball1.update();
    score1.update();
}