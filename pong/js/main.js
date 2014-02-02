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
    ball1.preload();
    wall1.preload();
    wall2.preload();
}

function create(){
    player1.create();
    player2.create();
    ball1.create();
    wall1.create();
    wall2.create();
}

function update(){
    player1.update();
    player2.update();
    ball1.update();
    wall1.update();
    wall2.update();
}