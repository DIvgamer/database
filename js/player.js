class Player{
constructor(){}

getCount(){

var playerCountref=db.ref('playercount')
playerCountref.on("value",function(data){

playercount=data.val()
})
}

updateCount(count){

    db.ref('/').update({

        playercount: count
    })

}
update(name){
var playerIndex="player"+playercount
db.ref('/').set({

    name:name 
})


}


}