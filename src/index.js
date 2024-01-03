import "./style.css";
import { generateGrid } from "./js/gridUI";
import { Player } from "./js/player";

const playerGameboard = document.querySelectorAll(".playerGrid");
const computerGameboard = document.querySelectorAll(".computerGrid")
generateGrid(playerGameboard,computerGameboard)

const human = new Player("Human");
const computer = new Player("Computer");
// to place ship first, I should run a function that grabs the player role, and the ship information.)

function displayShips(player,ship,x,y,alignment){
    if(player.role === "Human") {

        try{
        human.gameboard.placeShip(ship,x,y,alignment)
        console.log('test')
        if(alignment == 'tall'){
            console.log(alignment)
            for (let i = 0; i < ship.length; i++) {
                const row = document.querySelectorAll(`[data-y="${y+i}"]`);
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
        catch {
            console.error("An error occurred:");
        
          }
    }
}
displayShips(human,human.gameboard.ships[0],10,8,'tall')
// human.gameboard.placeShip(human.gameboard.ships[0],1,1,'tall')
human.gameboard.placeShip(human.gameboard.ships[1],2,2,'wide')
human.gameboard.placeShip(human.gameboard.ships[2],5,5,'wide')
console.log(human.gameboard.coordinateList)
