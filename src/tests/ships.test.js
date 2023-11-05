import { Ship } from "./ships.js";
let testSmallShip;
let testMediumShip;

beforeEach(() => {
  testSmallShip = new Ship(1);
  testMediumShip = new Ship(2);
});

test("Hit marks damage", () => {
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

test("Cannot hit sunk ship", () => {
  testSmallShip.hit();
  expect(testSmallShip.hit()).toBe(false);
});
