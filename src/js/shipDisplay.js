function displayShipPlacement(player,ship,x,y,alignment){
    if(player.role === "Human") {
        try{
            player.gameboard.placeShip(ship,x,y,alignment)
        if(alignment == 'tall'){
            console.log(alignment)
            for (let i = 0; i < ship.length; i++) {
                const row = document.querySelectorAll(`.playerGrid [data-y="${y+i}"]`);
                const square = row[0].querySelector(`[data-x="${x}"]`);
                square.style.backgroundColor = "red";
            } 
        }
        else {
            for (let i = 0; i < ship.length; i++) {
                const row = document.querySelectorAll(`[data-y="${y}"]`);
                const square = row[0].querySelector(`[data-x="${x+i}"]`);
                square.style.backgroundColor = "red";
            }       
    
        }
        }
        catch(e){
            console.error("An error occurred:", e);
        
          }
    } 
}


export { displayShipPlacement }