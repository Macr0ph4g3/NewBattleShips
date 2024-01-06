


function attackDOM(player,x,y){
    console.log('test')
    if(player.role == 'human'){
        try{
            const row = document.querySelectorAll(`.playerGrid [data-y="${y}"]`);
            const square = row[0].querySelector(`[data-x="${x}"]`);
    
          if(player.gameboard.receiveAttack(x,y) === true){
            square.style.backgroundColor = 'orange'
          } else {
            square.style.backgroundColor = 'black'
    
          }
        }
        catch(e){
            console.error("An error occurred:", e);
        
          }

    } else {
        try{
            const row = document.querySelectorAll(`.computerGrid [data-y="${y}"]`);
            const square = row[0].querySelector(`[data-x="${x}"]`);
    
          if(player.gameboard.receiveAttack(x,y) === true){
            // Hit, gotta check if it's a ship
            square.style.backgroundColor = 'orange'
          } 
          else {
            // Miss
            square.style.backgroundColor = 'black'
    
          }
        }
        catch(e){
            console.error("An error occurred:", e);
        
          }}}    

export { attackDOM }