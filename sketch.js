
var db,playercount
var gamestate=0
var form,game,player
function setup(){
db = firebase.database();

    createCanvas(500,500);
game=new Game();
    game.getState()
game.start()
   

}

function draw(){
   
    background("white");
    

}

