import { Ship } from "./ships";

// Gameboard allows a user to host all of their ships, along with a list of coordinates. It should track when ships have actually been placed

class Gameboard {
  constructor() {
    this.coordinateList = this.generateCoordinates();
    this.ships = this.generateShips();
  }
  // Creates each ship that a gameboard is allowed to start with
  generateShips() {
    const testSmallShip = new Ship("smallship", 1);
    const testMediumShip = new Ship("mediumship", 2);
    const shipArray = [testSmallShip, testMediumShip];
    return shipArray;
  }
  // Placing the ship should require the ship being placed, an X coordinate, and a Y coordinate.
  // Generate a list of 100 coordinates for the gameboard
  generateCoordinates() {
    const coordinates = [];
    for (let i = 0; i < 100; i++) {
      coordinates.push({ hasShip: false, isShot: false });
    }
    return coordinates;
  }
  placeShip(ship, location) {
    if (ship.placed) {
      throw new Error("Already placed ship");
    }
    if (this.coordinateList[location].hasShip === true || this.coordinateList[location].isShot === true) {
      throw new Error("Space Occupied");
    }
  
    ship.placed = true;
    this.coordinateList[location] = ship;
  }
  receiveAttack() {}
}

export { Gameboard };
