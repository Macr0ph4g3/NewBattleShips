import "./style.css";
import { generateGrid } from "./js/gridUI";
import { Player } from "./js/player";
import { displayShips } from "./js/shipDisplay";

const playerGameboard = document.querySelectorAll(".playerGrid");
const computerGameboard = document.querySelectorAll(".computerGrid")
generateGrid(playerGameboard,computerGameboard)

const human = new Player("Human");
const computer = new Player("Computer");
// to place ship first, I should run a function that grabs the player role, and the ship information.)

displayShips(human,human.gameboard.ships[0],10,8,'tall')
// human.gameboard.placeShip(human.gameboard.ships[0],1,1,'tall')
human.gameboard.placeShip(human.gameboard.ships[1],2,2,'wide')
human.gameboard.placeShip(human.gameboard.ships[2],5,5,'wide')
console.log(human.gameboard.coordinateList)
