
describe('applyMovement', () => {
  it('calculates gamma rate from list of binary strings', () => {
    const input = [
      00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010

    const output = applyMovement(coords, 'forward', 5);

    expect(output.x).toBe(5);
  });

});