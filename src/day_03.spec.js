const { calculateEpsilon, calculateGamma, getPowerConsumption, sumArrayColumns, applyRow} = require('./functions');


describe('day 03', () => {
  it('applyRow: applies the values in the row to the acc', () => {
    const input = ['0', '1', '1', '0'];
    const accumulator = [0,0,0,0];
    const result = applyRow(accumulator, input);
    expect(result).toEqual([0,1,1,0]);
  });

  it('sumArrayColumns: gets total sum for array cols', () => {
    const input = ['00100', '00100', '00010', '00001'];
    const result = sumArrayColumns(input);
    expect(result).toEqual([0,0,2,1,1]);
  });

  it('calculateGamma: calculates gamma rate from list of binary strings', () => {
    const input = [7, 5, 8, 7, 5];
    const setLength = 12;

    const output = calculateGamma(input, setLength);

    expect(output).toBe(22);
  });
  it('calculateEpsilon: calculates epsilon rate from pretotalled input', () => {
    const input = [7, 5, 8, 7, 5];
    const setLength = 12;

    const output = calculateEpsilon(input, setLength);

    expect(output).toBe(9);
  });
  it('getPowerConsumption calculates power consumption', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ];

    const output = getPowerConsumption(input);

    expect(output).toBe(198);
  });  
  
});