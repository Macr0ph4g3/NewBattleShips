import { Player } from "./player";
import { generateGrid } from './gridUI'

const playerGameboard = document.querySelectorAll(".playerGrid");
const computerGameboard = document.querySelectorAll(".computerGrid")
generateGrid(playerGameboard,computerGameboard)

const human = new Player("Human");
const computer = new Player("Computer");

export { human, computer }