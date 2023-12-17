import { Gameboard } from "./gameboard"
let userGameboard
let computerGameboard

beforeEach(() => {
  userGameboard = new Gameboard()
  computerGameboard = new Gameboard()
});

test("Gameboard can place a ship horizontally", () => {

  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide',)
  expect(userGameboard.coordinateList[0]).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[1]).toEqual(userGameboard.ships[0])

})

test("Gameboard can place a ship vertically", () => {
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'tall',)
  expect(userGameboard.coordinateList[0]).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[10]).toEqual(userGameboard.ships[0])

})

test('Cannot place two ships in same location', ()=> {
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide');
  expect(() => {
      userGameboard.placeShip(userGameboard.ships[1], 1, 1,'wide');
  }).toThrow('Insufficient Available Spaces');

})


test('Can place multiple ships', ()=>{
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide');
  userGameboard.placeShip(userGameboard.ships[1], 1, 2, 'wide');

  expect(userGameboard.coordinateList).toContain(userGameboard.ships[0])
  expect(userGameboard.coordinateList).toContain(userGameboard.ships[1])

})

test("Can't place a ship if it goes outside the boundaries of the X axis", ()=>{
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 1, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 2, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 3, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 4, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 5, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 6, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2],  9, 7, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2], 9, 8, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2],  9, 9, 'wide');
    }).toThrow('Impossible Placement Wide');
    expect(() => {
      userGameboard.placeShip(userGameboard.ships[2],  9, 10, 'wide');
    }).toThrow('Impossible Placement Wide');
                                        
})

test("Can't place a ship if it goes outside the boundaries of the y axis", ()=>{
  expect(() => {
    userGameboard.placeShip(userGameboard.ships[2],  9, 7, 'tall');
  }).toThrow('Impossible Placement Tall');
  expect(() => {
    userGameboard.placeShip(userGameboard.ships[2], 9, 8, 'tall');
  }).toThrow('Impossible Placement Tall');
  expect(() => {
    userGameboard.placeShip(userGameboard.ships[2],  9, 9, 'tall');
  }).toThrow('Impossible Placement Tall');
  expect(() => {
    userGameboard.placeShip(userGameboard.ships[2],  9, 10, 'tall');
  }).toThrow('Impossible Placement Tall');
                                      
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
