const day = require('./day_6');

const test_input = ['3,4,3,1,2'];

describe('day 06', () => {
  it('models the fishes', () => {
    const result = day.process(test_input, 80);
    expect(result).toEqual(5934);
  });
});
