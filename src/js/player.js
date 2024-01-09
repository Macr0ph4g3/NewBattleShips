import { Gameboard } from "./gameboard";

class Player {
  constructor(role) {
    this.gameboard = this.generateGameboard();
    this.role = role;
    this.turn = false;
  }
  generateGameboard() {
    const playerGameboard = new Gameboard();
    return playerGameboard;
  }
  fireShot(x, y, player) {
    const locationInArray = x - 1 + (y - 1) * 10;
    if (player.gameboard.coordinateList[locationInArray].isShot === false) {
      player.gameboard.receiveAttack(x, y);
      return "Attack successful";
    } else {
      throw new Error("Location already shot"); // Throw an error instead of returning a string
    }
  }
}

export { Player };
