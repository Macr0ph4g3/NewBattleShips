import "./style.css";
import { computer, human } from "./js/gameInitialization";
import { displayShips } from "./js/shipDisplay";


console.log(human.gameboard.ships[0],computer)
// to place ship first, I should run a function that grabs the player role, and the ship information.)

displayShips(human,human.gameboard.ships[0],5,5,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[0],1,1,'tall')

function findtd(){
    const td = document.querySelectorAll('.computerGrid td')
    td.forEach(cell => {
        cell.addEventListener('click', ()=>{
            
            const x = cell.dataset.x
            const y = cell.parentNode.dataset.y

            displayShips(computer,computer.gameboard.ships[0],x,y)
            return { x, y}
        })
    });
}
findtd()