const { getSlidingIncreaseCount, sumArrayMembers } = require('./functions');

describe('sumArrayMembers', () => {
  it('Sums array members', () => {
    const input = [1, 2, 3, 4, 5];
    expect(sumArrayMembers(input)).toBe(15);
  });
})
describe('getSlidingIncreaseCount', () => {
  it('Returns correct sliding increase count for 3 width window', () => {
    const values = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263
    ];

    expect(getSlidingIncreaseCount(values, 3)).toBe(5);
  });

  it('Returns correct sliding increase count for 3 width window', () => {
    expect(getSlidingIncreaseCount([1, 2, 3, 1, 2, 5], 3)).toBe(1);
  });
});