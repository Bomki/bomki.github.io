var game = new Phaser.Game(1360, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
    player1.preload();
    player2.preload();
    ball1.preload();
}

function create(){
    player1.create();
    player2.create();
    ball1.create();
}

function update(){
    player1.update();
    player2.update();
    ball1.update();
}