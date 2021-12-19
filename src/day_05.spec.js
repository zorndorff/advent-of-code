const day = require('./day_5');
const {} = require('./functions');

const input_day_05 = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;



describe('day 05', () => {
  it('parseInput: parses input into list of coordinate segments', () => {
    const result = day.parseInput(input_day_05.split('\n'));
    expect(result).toMatchSnapshot();
  });
  it('process: returns the correct number of overlapping points', () => {
    const result = day.process(input_day_05.split('\n'));
    expect(result.overlapPoints).toEqual(5);
  })

});
