import { Ship } from "../class-Ships.js";
let testSmallShip;
let testMediumShip;

beforeEach(() => {
  testSmallShip = new Ship('smallship', 1);
  testMediumShip = new Ship('mediumship', 2);
});

test("Can hit unsunk ship", () => {
  expect(testSmallShip.sunk).not.toBe(true)
  testSmallShip.hit();
  expect(testSmallShip.damage).toBe(1);
});
test("Damage tracks multiple hits.", () => {
  testMediumShip.hit();
  testMediumShip.hit();
  expect(testMediumShip.damage).toBe(2);
});

test("Sunk if length = damage", () => {
  testMediumShip.hit();
  testMediumShip.hit();
  expect(testMediumShip.sunk).toBe(true);
});

test("Sunk if length != damage", () =>  {
  testMediumShip.hit();
  expect(testMediumShip.sunk).not.toBe(true);
})

test("Cannot hit sunk ship", () => {
  testSmallShip.hit();
  expect(testSmallShip.hit()).toBe(false);
});
