import { Ship } from "./ships";

// Gameboard allows a user to host all of their ships, along with a list of coordinates. It should track when ships have actually been placed

class Gameboard {
  constructor() {
    this.coordinateList = this.generateCoordinates();
    this.ships = this.generateShips();
  }
  // Creates each ship that a gameboard is allowed to start with
  generateShips() {
    const testSmallShip = new Ship("smallship", 2);
    const testMediumShip = new Ship("mediumship", 3);
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
  placeShip(ship, x, y, alignment) {
    const locationInArray = x - 1 + (y - 1) * 10;

    // // If the ship being used has already been placed
    // if (ship.placed) {
    //   throw new Error("Already placed ship");
    // }
    // If trying to go past the X axis
    if (alignment === "wide") {
      if (x + ship.length > 10) {
        throw new Error("Impossible Placement Wide");
      }
    }
    // If trying to go past the Y axis
    if (alignment === "tall") {
      if (y + ship.length > 10) {
        throw new Error("Impossible Placement Tall");
      }
    }

    // Check if the spaces are occupied by calculating the amount of spaces that are available
    try {
      let availableSpaces = 0;
      const cellsChecked = [];
      for (let i = 0; i < ship.length; i++) {
        // Wide calculates by adding 1 to the location
        if (alignment === "wide") {
          if (this.coordinateList[locationInArray + i].hasShip == false) {
            cellsChecked.push(i);
            availableSpaces += 1;
          }
        }
        // Tall calculates by adding 10 to the location
        if (alignment === "tall") {
          if (this.coordinateList[locationInArray + i * 10].hasShip == false) {
            cellsChecked.push(i);
            availableSpaces += 1;
          }
        }
      }
      if (availableSpaces == ship.length) {
        console.log("available spaces is ship length");
        for (let i = 0; i < ship.length; i++) {
          this.coordinateList[locationInArray + cellsChecked[i]] = ship;
        }
      }
    } catch (error) {
      throw new Error("Impossible Placement: Insufficent Available Spaces");
    }

    ship.placed = true;
  }
  receiveAttack() {}
}

export { Gameboard };
