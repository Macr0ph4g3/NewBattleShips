// function changeTurn(attacker, defender) {
//   if (attacker.turn === true) {
//     attacker.turn = false;
//     defender.turn = true;
//   } else {
//     attacker.turn = true;
//     defender.turn = false;
//   }
// }

// function attackDOMTwo(attacker, x, y, defender) {
//   //   console.log(attacker,x,y,defender)
//   const row = document.querySelectorAll(`.computerGrid [data-y="${y}"]`);
//   const square = row[0].querySelector(`[data-x="${x}"]`);
//   if (attacker.role === "Human" && attacker.turn === true) {
//     try {
//       const result = defender.gameboard.receiveAttack(x, y);
//       console.log('result',result)
//       if (result === "Hit ship") {
//         square.style.backgroundColor = "orange";
//         console.log(square)
//         changeTurn(attacker, defender);
//         attackDOM(defender, x, y, attacker);
//       } else if (result === "Miss") {
//         changeTurn(attacker, defender);
//         square.style.backgroundColor = "black";
//         attackDOM(defender, x, y, attacker);
//       } else {
//         console.log("Invalid shot");
//       }
//     } catch (e) {
//       console.error("An error occurred:", e);
//     }
//   } else if (attacker.role === "Computer" && attacker.turn === true) {
//     try {
//       console.log("PC attack");
//       const result = defender.gameboard.receiveAttack(x, y);
//       if (result === "Hit ship") {
//         changeTurn(defender, attacker);
//         square.style.backgroundColor = "orange";
//       } else if (result === "Miss") {
//         changeTurn(defender, attacker);
//         square.style.backgroundColor = "black";
//       } else {
//         console.log("invalid shot");
//       }
//     } catch (e) {
//       console.error("An error occurred:", e);
//       console.log(result);
//     }
//   }
// }

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
        attackDOM(defender, x, y, attacker);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export { attackDOM };
