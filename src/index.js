import "./style.css";
import { computer, human } from "./js/gameInitialization";
import { displayShipPlacement } from "./js/shipDisplay"
import { attackDOM } from "./js/attacklogic";

// to place ship first, I should run a function that grabs the player role, and the ship information.)

displayShipPlacement(human,human.gameboard.ships[0],5,5,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[0],1,1,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[1],2,1,'tall')
computer.gameboard.placeShip(computer.gameboard.ships[2],3,1,'tall')

function cellListenerSetup() {
    const td = document.querySelectorAll('.computerGrid td');
    
    function clickAttack(cell) {
        const x = cell.dataset.x;
        const y = cell.parentNode.dataset.y;
        attackDOM(human, x, y, computer);

        // Remove the event listener after it's triggered
        // cell.removeEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        const clickedCell = event.target;
        clickAttack(clickedCell);
    }

    td.forEach(cell => {
        cell.addEventListener('click', clickHandler);
    });
}
cellListenerSetup()
human.turn = true