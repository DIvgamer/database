class Form {
constructor(){


}
display(){
var title = createElement('h4')
title.html("car race game")
title.position(130,0)

var input =createInput("name")
input.position(130,160)

var button = createButton('enter')
button.position(250,200)

button.mousePressed(function(){
input.hide()
button.hide()
var name=input.value()
playercount+=1
player.update(name)
player.updateCount(playercount)

var greetings=createElement('h2')
greetings.html("hello"+name)

greetings.position(130,160)




})


}





}