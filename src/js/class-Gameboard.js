import { Ship } from "./class-Ships";

// Gameboard allows a user to host all of their ships, along with a list of coordinates. It should track when ships have actually been placed

class Gameboard {
  constructor() {
    this.coordinateList = this.generateCoordinates();
    this.ships = this.generateShips();
    this.shipsLeft = true;
  }
  // Creates each ship that a gameboard is allowed to start with
  generateShips() {
    const testSmallShip = new Ship("smallship", 2);
    const testMediumShip = new Ship("mediumship", 3);
    const testLargeShip = new Ship("largeship", 4);

    const shipArray = [testSmallShip, testMediumShip, testLargeShip];
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
  locationCalculator(x,y){
    const locationInArray = x - 1 + (y - 1) * 10;
    return locationInArray
  }
  placeShip(ship, x, y, alignment) {
    const locationInArray = this.locationCalculator(x,y)

    // If trying to go past the X axis
    if (alignment === "wide") {
      if (x + ship.length > 11) {
        throw new Error("Impossible Placement Wide");
      }
    }
    // If trying to go past the Y axis
    if (alignment === "tall") {
      if (y + ship.length > 11) {
        throw new Error("Impossible Placement Tall");
      }
    }

    // Check if the spaces are occupied by calculating the amount of spaces that are available
    let availableSpaces = 0;
    for (let i = 0; i < ship.length; i++) {
      // Wide calculates by adding 1 to the location
      if (alignment === "wide") {
        if (this.coordinateList[locationInArray + i].hasShip == false) {
          availableSpaces += 1;
        }
      }
      // Tall calculates by adding 10 to the location
      if (alignment === "tall") {
        if (this.coordinateList[locationInArray + i * 10].hasShip == false) {
          availableSpaces += 1;
        }
      }
    }

    // Placement of ship after checks are made
    if (availableSpaces == ship.length) {
      for (let i = 0; i < ship.length; i++) {
        // Horizontal placement
        if (alignment === "wide") {
          this.coordinateList[locationInArray + i].hasShip = ship;
          // run function for DOM UI
        }
        if (alignment === "tall") {
          this.coordinateList[locationInArray + i * 10].hasShip = ship;
          // run function for DOM UI
        }
      }
    } else {
      throw new Error("Insufficient Available Spaces");
    }
  }

  receiveAttack(x, y) {
    try {

    const locationInArray = this.locationCalculator(x,y)
    // If location is already shot, throw an error
    if (this.coordinateList[locationInArray].isShot) {
      return ('Location already shot');
    }
  
    // If location has a ship, damage the ship
    if (this.coordinateList[locationInArray].hasShip) {
      this.coordinateList[locationInArray].hasShip.hit();
      this.coordinateList[locationInArray].isShot = true;
      
      // Check if the ship is sunk
      if (this.coordinateList[locationInArray].hasShip.sunk) {
         this.checkShipsLeft();
         return 'Sunk Ship'
      } else {
        return 'Hit ship'
      }
    } else {
      // Mark the empty location as shot
      this.coordinateList[locationInArray].isShot = true;
      return 'Miss'
    }
  } catch (error) {
    console.error(error.message)
  }
  }
  checkShipsLeft() {
    let totalShipsSunk = 0;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk) {
        totalShipsSunk += 1;
      }
    }
    if ((totalShipsSunk === this.ships.length)) {
      this.shipsLeft = false;
    }
  }
}

export { Gameboard };
