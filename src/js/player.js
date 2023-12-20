import { Gameboard } from "./gameboard";

class Player {
  constructor(name, role) {
    this.gameboard = this.generateGameboard()
    this.role = role
    this.name = name
  }
  generateGameboard(){
    const playerGameboard = new Gameboard()
    return playerGameboard
  }
  fireShot(x, y, player){
    const locationInArray = x - 1 + (y - 1) * 10;

    if(player.gameboard[locationInArray].isShot === false){
        player.receiveAttack(x, y)
        return "Attack successful"
    } 
    else {
        return "Location alreayd shot"

    }
  }
}

export { Player }
