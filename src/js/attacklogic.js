function attackDOM(attacker, x, y, defender) {
  // First determine the defenders square
  const defenderSquare = document.querySelector(
    `.${defender.role}Grid [data-y="${y}"] [data-x="${x}"]`
  );
  let resultColor;
  const attackerTurn = attacker.turn;

  // If it's actually their turn, then you can attack.
  if (attackerTurn) {
    // Color square if attacks valid
    try {
      const result = defender.gameboard.receiveAttack(x, y);
      switch (result) {
        case "Hit ship":
          resultColor = "orange";
          break;

        case "Sunk Ship":
          resultColor = "red";
          break;

        case "Location already shot":
          throw new Error("Location already shot");
          break;
        
        default:
          resultColor = "blue"; // Miss usecase
          break;
      }
    // Color the square accordingly
      defenderSquare.style.backgroundColor = resultColor;
      
    // Switch turns between players

      attacker.turn = false;
      defender.turn = true;

      // Intiate a computer attack. Eventually need to work out actual logic for it to be random and not just imitate player

      if (attacker.role === "player") {
        const randomSpot = randomAttack(attacker)

        attackDOM(defender, randomSpot.x, randomSpot.y, attacker);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function randomAttack(enemyGameBoard) {
  const newArray = [];

  // This calculates every area that is possible to hit and pushes it in to above array
  for (let i = 0; i < enemyGameBoard.gameboard.coordinateList.length; i++) {
    if (!enemyGameBoard.gameboard.coordinateList[i].isShot) {
      newArray.push(i);
    }
  }
  // This chooses a random location spot in that array
  const nextHitLocation =
    newArray[Math.floor(Math.random() * newArray.length)];
  // If array is empty, there's no spots left so it returns False
  if (newArray.length == 0) {
    return false;
  }
  const x = (nextHitLocation % 10) + 1;
  const y = Math.floor(nextHitLocation / 10) + 1;

  return { x, y };

  // console.log('PC attacked'+' '+nextHitLocation)
}


export { attackDOM };
