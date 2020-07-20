class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref = database.ref('gameState')
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    updategamestate(state){
        var gamestateref = database.ref('/')
        gamestateref.update({
            gameState: state
        })
    }
    start(){
       if(gamestate === 0){
           player = new Player();
           player.getplayercount();
           form = new Form();
           form.display();
           
       }
    }
    play(){
        form.hide();
        text("START",120,100);
        Player.getallplayersinfo();
        if(allplayers!== undefined){
            var positionY = 120;
            for(var plr in allplayers){
                if(plr === "player"+ player.index){
                    fill("red");
                }
                text(allplayers[plr].name+":"+allplayers[plr].distance,100,positionY)
                positionY = positionY+20;
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null ){
            player.distance = player.distance + 20;
            player.updateplayerinfo();
        }
        
    }
}