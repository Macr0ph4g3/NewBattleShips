// Begin your app by creating the Ship class/factory (your choice).
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
// Ships should have a hit() function that increases the number of ‘hits’ in your ship.
// isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.

class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length;
    this.damage = 0;
    this.sunk = false;
    this.placed = false
  }
  hit() {
    if(this.sunk === true) {
      return false
    }
    this.damage += 1
    this.isSunk()
    return true
  }
  isSunk() {
    if(this.length === this.damage) {
      this.sunk = true
    }
    return this.sunk
  }
}

export { Ship };
