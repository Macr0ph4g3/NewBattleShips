import "./style.css";
import { computer, human } from "./js/gameInitialization";
import { displayShipPlacement } from "./js/shipDisplay"
import { attackDOM } from "./js/attacklogic";

console.log(human.gameboard.ships[0],computer)
// to place ship first, I should run a function that grabs the player role, and the ship information.)

displayShipPlacement(human,human.gameboard.ships[0],5,5,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[0],1,1,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[1],2,1,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[2],3,1,'tall')

function findtd(){
    const td = document.querySelectorAll('.computerGrid td')
    td.forEach(cell => {
        cell.addEventListener('click', ()=>{
            
            const x = cell.dataset.x
            const y = cell.parentNode.dataset.y

            attackDOM(computer,x,y)
            return { x, y}
        })
    });
}
findtd()