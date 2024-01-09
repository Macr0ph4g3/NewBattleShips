function changeTurn(playerOne, playerTwo) {
    if(playerOne.turn === true){
        playerOne.turn = false
        playerTwo.turn = true
    } else {
        playerOne.turn = true
        playerTwo.turn = false
    }
}


function attackDOM(playerOne, x, y, playerTwo) {
//   console.log(playerOne,x,y,playerTwo)
  if (playerOne.role === "Human" && playerOne.turn === true) {
    try {
        console.log("Human attack")
      const row = document.querySelectorAll(`.computerGrid [data-y="${y}"]`);
      const square = row[0].querySelector(`[data-x="${x}"]`);
      const result = playerTwo.gameboard.receiveAttack(x, y)
      if ( result === 'Hit ship') {
        
        changeTurn(playerOne, playerTwo);
        square.style.backgroundColor = "orange";
        
        attackDOM(playerTwo, x, y, playerOne)
      } else if (result === 'Miss') {
        changeTurn(playerOne, playerTwo);
        square.style.backgroundColor = "black";
        attackDOM(playerTwo, x, y, playerOne)
      } else {
        console.log('Invalid shot')
      }
    } catch (e) {
      console.error("An error occurred:", e);
    }
  } else if (playerOne.role === "Computer" && playerOne.turn === true) {
    try {
        console.log("PC attack")

      const row = document.querySelectorAll(`.playerGrid [data-y="${y}"]`);
      const square = row[0].querySelector(`[data-x="${x}"]`);

      if (playerTwo.gameboard.receiveAttack(x, y) === true) {
        changeTurn(playerTwo, playerOne);
        square.style.backgroundColor = "orange";
      } else {
        changeTurn(playerTwo, playerOne);
        square.style.backgroundColor = "black";
      }
    } catch (e) {
      console.error("An error occurred:", e);
    }
  }
}

export { attackDOM };
