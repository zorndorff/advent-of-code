const day = require('./day_7');

const test_input = ['16,1,2,0,4,2,7,1,2,14'];

describe('day 07', () => {
  it('gets the position', () => {
    const result = day.process(test_input);
    expect(result).toEqual(37);
  });
});
