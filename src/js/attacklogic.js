function changeTurn(playerOne, playerTwo) {
  if (playerOne.turn === true) {
    playerOne.turn = false;
    playerTwo.turn = true;
  } else {
    playerOne.turn = true;
    playerTwo.turn = false;
  }
}

function attackDOM(playerOne, x, y, playerTwo) {
  //   console.log(playerOne,x,y,playerTwo)
  const row = document.querySelectorAll(`.computerGrid [data-y="${y}"]`);
  const square = row[0].querySelector(`[data-x="${x}"]`);
  if (playerOne.role === "Human" && playerOne.turn === true) {
    try {
      const result = playerTwo.gameboard.receiveAttack(x, y);
      if (result === "Hit ship") {
        changeTurn(playerOne, playerTwo);
        square.style.backgroundColor = "orange";

        attackDOM(playerTwo, x, y, playerOne);
      } else if (result === "Miss") {
        changeTurn(playerOne, playerTwo);
        square.style.backgroundColor = "black";
        attackDOM(playerTwo, x, y, playerOne);
      } else {
        console.log("Invalid shot");
      }
    } catch (e) {
      console.error("An error occurred:", e);
    }
  } else if (playerOne.role === "Computer" && playerOne.turn === true) {
    try {
      console.log("PC attack");
      const result = playerTwo.gameboard.receiveAttack(x, y);
      if (result === "Hit ship") {
        changeTurn(playerTwo, playerOne);
        square.style.backgroundColor = "orange";
      } else if (result === "Miss") {
        changeTurn(playerTwo, playerOne);
        square.style.backgroundColor = "black";
      } else {
        console.log("invalid shot");
      }
    } catch (e) {
      console.error("An error occurred:", e);
      console.log(result);
      console.log(result);
    }
  }
}

export { attackDOM };
