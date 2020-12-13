class Player{
constructor(){

}

getCount(){
database.ref("playerCount").on("value", function(data){
 playerCount = data.val();   
})    
}
updateCount(count){
 database.ref("/").update({
 playerCount:count    
 })       
}
update(n){
var playerIndex = "player"+playerCount
database.ref(playerIndex).update({name:n})
}



}