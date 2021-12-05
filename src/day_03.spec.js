const {
  calculateEpsilon,
  calculateGamma,
  getPowerConsumption,
  sumArrayColumns,
  applyRow,
  findByBit,
  filterInputByCommonFlags,
  calculateLifeSupportValues,
} = require('./functions');

const day_03_input = [
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
  '01010',
];

describe('day 03', () => {
  it('applyRow: applies the values in the row to the acc', () => {
    const input = ['0', '1', '1', '0'];
    const accumulator = [0, 0, 0, 0];
    const result = applyRow(accumulator, input);
    expect(result).toEqual([0, 1, 1, 0]);
  });

  it('sumArrayColumns: gets total sum for array cols', () => {
    const input = ['00100', '00100', '00010', '00001'];
    const result = sumArrayColumns(input);
    expect(result).toEqual([0, 0, 2, 1, 1]);
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
    const output = getPowerConsumption(Array.from(day_03_input));

    expect(output).toBe(198);
  });

  it('findByBit: filters input set by bit at position', () => {
    const output = findByBit(day_03_input, 0, '1');

    expect(output).toEqual([
      '11110',
      '10110',
      '10111',
      '10101',
      '11100',
      '10000',
      '11001',
    ]);
  });

  it('filterInputByCommonFlags: filters input to most common flag at position', () => {
    const output = filterInputByCommonFlags(day_03_input, 0, 'most_common');
    expect(output).toEqual([
      '11110',
      '10110',
      '10111',
      '10101',
      '11100',
      '10000',
      '11001',
    ]);
  });

  it('filterInputByCommonFlags: filters input to least common flag at position', () => {
    const output = filterInputByCommonFlags(day_03_input, 0, 'least_common');
    expect(output).toEqual(['00100', '01111', '00111', '00010', '01010']);
  });

  it('calcLifeSupportValues: outputs correct oxygen generator ratings', () => {
    const output = calculateLifeSupportValues(day_03_input, 'oxygen');
  
    expect(output).toBe(23);
  });

  it('calcLifeSupportValues: outputs correct co2 scrubber ratings', () => {
    const output = calculateLifeSupportValues(day_03_input, 'co2');
    expect(output).toBe(10);
  });
});
