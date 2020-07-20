var form,player,game,allplayers,distance = 0;
var gamestate = 0, playercount = 0;
var database;


function setup(){
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();
}

function draw(){
    if(playercount === 2){
        game.updategamestate(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
}