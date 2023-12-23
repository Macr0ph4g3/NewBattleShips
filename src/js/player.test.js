import { Player } from "./player";

test("player takes name", () => {
  const bob = new Player("bob", "Human");
  expect(bob.name).toBe("bob");
});
test("fires a shot to enemy gameboard", () => {
  const bob = new Player("bob", "Human");
  const computer = new Player("computer", "Computer");
  bob.fireShot(5, 5, computer);
});
test("rejects shots fired at locations already fired upon", () => {
    const bob = new Player("bob", "Human");
    const computer = new Player("computer", "Computer");
  
    bob.fireShot(5, 5, computer);
    
    expect(() => {
      bob.fireShot(5, 5, computer);
    }).toThrow('Location already shot');
  });