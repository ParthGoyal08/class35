class Form{
constructor(){

}



display(){
var title = createElement("h2")
title.html("car racing game")
title.position(140,0);
var input = createInput("name")
var button = createButton("play")
var greeting = createElement("h3")
input.position(130,160);
button.position(200,200);
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value()
//playerCount = playerCount+1;
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("hello "+name+" we are waiting for other players to join ");
greeting.position(130,160);
});
}
}
