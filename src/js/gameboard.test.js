import { Gameboard } from "./gameboard"
let userGameboard
let computerGameboard

beforeEach(() => {
  userGameboard = new Gameboard()
  computerGameboard = new Gameboard()
});

test.only("Gameboard can place a ship horizontally", () => {

  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide',)
  expect(userGameboard.coordinateList[0]).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[1]).toEqual(userGameboard.ships[0])

})

test("Gameboard can place a ship vertically", () => {
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'tall',)
  expect(userGameboard.coordinateList[0]).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[9]).toEqual(userGameboard.ships[0])

})

test("Can't place a ship if already put on coordinate list", ()=>{

  userGameboard.placeShip(userGameboard.ships[0], 1, 'wide');
  expect(() => {
      userGameboard.placeShip(userGameboard.ships[0], 1, 'wide');
  }).toThrow('Already placed ship');

})

test('Cannot place two ships in same location', ()=> {
  userGameboard.placeShip(userGameboard.ships[0], 1, 'wide');
  expect(() => {
      userGameboard.placeShip(userGameboard.ships[1], 1);
  }).toThrow('Space occupied');

})


test('Can place multiple ships', ()=>{
  userGameboard.placeShip(userGameboard.ships[0], 1, 'wide')
  expect(userGameboard.coordinateList).toContain(userGameboard.ships[0])

})

test("Can't place a ship if it goes outside the boundaries of the X axis", ()=>{
    // X axis would be every 10 coordinates.
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 1, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 19, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 29, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 39, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 49, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 59, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 69, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 79, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 89, 'wide');
    }).toThrow('Space occupied');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 99, 'wide');
    }).toThrow('Space occupied');
                                        
})
test("Can't place a ship at impossible coordinates", () => {

})

test('Can hit ship after placement', () => {

})

test('Ship can get sunk', () => {

})

test('Reports condition if all ships are sunk that belong to gameBoard', () => {

})

test('Can place a ship vertically', ()=> {

})

test('Gameboard tracks misses',()=>{

})
