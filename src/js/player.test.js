import { Player } from "./player";


test.only('player takes name', () => {
    const bob = new Player('bob','Human')
    expect(bob.name).toBe('bob');
});
// test('fires a shot to enemy gameboard', () => {
//     bob.fireShot(25, computer);
    
// });
// it('rejects shots fired at locations already fired upon', () => {
//     bob.fireShot(25, testBoard);
//     bob.fireShot(10, testBoard);
// });
