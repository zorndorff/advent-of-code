const { getSlidingIncreaseCount, sumArrayMembers } = require('./day_02');

describe('sumArrayMembers', () => {
  it('Sums array members', () => {
    const input = [1,2,3,4,5];
    expect(sumArrayMembers(input)).toBe(15);
  });
})
describe('getSlidingIncreaseCount', () => {
  it('Returns correct sliding increase count for single width window', () => {
    expect(getSlidingIncreaseCount([1,2,3], 1)).toBe(3);
  });

  it('Returns correct sliding increase count for 3 width window', () => {
    expect(getSlidingIncreaseCount([1,2,3,1], 3)).toBe(3);
  });
});