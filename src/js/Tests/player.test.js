import { Player } from "../class-Player";


test("fires a shot to enemy gameboard", () => {
  const bob = new Player("Human");
  const computer = new Player("Computer");
  bob.fireShot(5, 5, computer);
});
test("rejects shots fired at locations already fired upon", () => {
    const bob = new Player("Human");
    const computer = new Player("Computer");
  
    bob.fireShot(5, 5, computer);
    
    expect(() => {
      bob.fireShot(5, 5, computer);
    }).toThrow('Location already shot');
  });