import { Gameboard } from "./gameboard"
let userGameboard

beforeEach(() => {
  userGameboard = new Gameboard()
});

test("Gameboard can place a ship horizontally", () => {

  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide',)
  expect(userGameboard.coordinateList[0].hasShip).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[1].hasShip).toEqual(userGameboard.ships[0])

})

test("Gameboard can place a ship vertically", () => {
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'tall',)
  expect(userGameboard.coordinateList[0].hasShip).toEqual(userGameboard.ships[0])
  expect(userGameboard.coordinateList[10].hasShip).toEqual(userGameboard.ships[0])

})

test('Cannot place two ships in same location', ()=> {
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide');
  expect(() => {
      userGameboard.placeShip(userGameboard.ships[1], 1, 1,'wide');
  }).toThrow('Insufficient Available Spaces');

})

test('Can place multiple ships', () => {
  const userGameboard = new Gameboard();

  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide');
  userGameboard.placeShip(userGameboard.ships[1], 1, 2, 'wide');

  // Check specific coordinates to see if ships are placed there
  expect(userGameboard.coordinateList[0].hasShip).toBe(userGameboard.ships[0]);
  expect(userGameboard.coordinateList[1].hasShip).toBe(userGameboard.ships[0]);

  expect(userGameboard.coordinateList[10].hasShip).toBe(userGameboard.ships[1]);
  expect(userGameboard.coordinateList[11].hasShip).toBe(userGameboard.ships[1]);
  expect(userGameboard.coordinateList[12].hasShip).toBe(userGameboard.ships[1]);


});

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
    userGameboard.placeShip(userGameboard.ships[2], 9, 6, 'tall');
    expect(userGameboard.coordinateList[58].hasShip).toEqual(userGameboard.ships[2])
    expect(userGameboard.coordinateList[68].hasShip).toEqual(userGameboard.ships[2])
    expect(userGameboard.coordinateList[78].hasShip).toEqual(userGameboard.ships[2])
    expect(userGameboard.coordinateList[88].hasShip).toEqual(userGameboard.ships[2])

          
})

test('Can hit ship after placement', () => {
  userGameboard.placeShip(userGameboard.ships[2], 9, 6, 'tall');
  userGameboard.receiveAttack(9, 6)
  expect(userGameboard.ships[2].damage).toEqual(1)
  expect(userGameboard.coordinateList[58].hasShip).toEqual(userGameboard.ships[2])
})

test('Ship can get sunk', () => {
  userGameboard.placeShip(userGameboard.ships[2], 9, 6, 'tall');
  userGameboard.receiveAttack(9, 6)
  userGameboard.receiveAttack(9, 7)
  userGameboard.receiveAttack(9, 8)
  userGameboard.receiveAttack(9, 9)

  expect(userGameboard.ships[2].damage).toEqual(4)
  expect(userGameboard.ships[2].sunk).toEqual(true)
  expect(userGameboard.coordinateList[58].hasShip).toEqual(userGameboard.ships[2])

})

test('Reports condition if all ships are sunk that belong to gameBoard', () => {
  // Place each ship
  userGameboard.placeShip(userGameboard.ships[0], 1, 1, 'wide');
  userGameboard.placeShip(userGameboard.ships[1], 1, 2, 'wide');
  userGameboard.placeShip(userGameboard.ships[2], 1, 3, 'wide');
  
  // BEAT THEM ALL DOWN
  userGameboard.receiveAttack(1, 1)
  userGameboard.receiveAttack(2, 1)

  userGameboard.receiveAttack(1, 2)
  userGameboard.receiveAttack(2, 2)
  userGameboard.receiveAttack(3, 2)

  userGameboard.receiveAttack(1, 3)
  userGameboard.receiveAttack(2, 3)
  userGameboard.receiveAttack(3, 3)
  userGameboard.receiveAttack(4, 3)

 expect(userGameboard.shipsLeft).toEqual(false)

})

test('Gameboard tracks misses',()=>{
  userGameboard.receiveAttack(9, 6)

  expect(userGameboard.coordinateList[58].isShot).toEqual(true)
})

test('Cannot hit isShot True location', ()=> {
  userGameboard.receiveAttack(9, 6)
  expect(() => {
    userGameboard.receiveAttack(9, 6);
}).toThrow('Location already shot');
 

})
test('checking if statement', ()=> {
  
  try{
    userGameboard.placeShip(userGameboard.ships[0], 9, 1, 'wide')
    console.log(userGameboard.coordinateList[0])

  } catch {
    console.error("An error occurred:");

  }
})
