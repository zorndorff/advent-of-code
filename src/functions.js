const sumArrayMembers = (inputs) => {
  return inputs.reduce(
    (previousValue, coordsValue) => previousValue + coordsValue
  );
};

const getSlidingIncreaseCount = (readings, windowSize) => {
  let lastTotal;
  let nextTotal;
  let totalIncreasing = 0;
  let index = 0;

  while (index < readings.length - (windowSize - 1)) {
    const nextInputs = readings.slice(index, index + windowSize);

    if (nextInputs.length > 0) nextTotal = sumArrayMembers(nextInputs);

    if (lastTotal && nextTotal > lastTotal) {
      totalIncreasing++;
    }

    lastTotal = nextTotal;
    index++;
  }

  return totalIncreasing;
};

const applyMovement = (coords, direction, value) => {
  switch (direction) {
    case 'forward':
      coords.x += value;
      break;
    case 'down':
      coords.depth += value;
      break;
    case 'up':
      coords.depth += -value;
      break;
  }
  return coords;
};

const applyMovementAim = (coords, direction, value) => {
  switch (direction) {
    case 'forward':
      coords.x += value;
      coords.depth += coords.aim * value;
      break;
    case 'down':
      coords.aim += value;
      break;
    case 'up':
      coords.aim += -value;
      break;
  }
  return coords;
};

function filledArray(size, value) {
  return Array.apply(null, Array(size)).map(Number.prototype.valueOf, value);
}

const applyRow = (accumulator, row) => {
  let index = 0;
  for (const col of row) {
    if (col === '1' || col === 1) {
      accumulator[index]++;
    }
    index++;
  }
  return accumulator;
};

const sumArrayColumns = (input) => {
  const totals = filledArray(input[0].length, 0);
  return input.reduce((accumulator, row) => applyRow(accumulator, row), totals);
};

const calculateGamma = (input, setLength) => {
  const gamma = [];

  for (const col of input) {
    if (col > setLength / 2) {
      gamma.push('1');
      continue;
    }
    gamma.push('0');
  }

  return parseInt(gamma.join(''), 2);
};

const calculateEpsilon = (input, setLength) => {
  const epsilon = [];

  for (const col of input) {
    if (col > setLength / 2) {
      epsilon.push('0');
      continue;
    }

    epsilon.push('1');
  }
  return parseInt(epsilon.join(''), 2);
};

const getPowerConsumption = (input) => {
  const summed = sumArrayColumns(input);
  const gamma = calculateGamma(summed, input.length);
  const epsilon = calculateEpsilon(summed, input.length);
  return gamma * epsilon;
};

const findByBit = (input, position, bitValue) => {
  return input.filter((row) => row[position] === bitValue);
};

const filterInputByCommonFlags = (input, position, filterMethod) => {
  const summedInputColumns = sumArrayColumns(input);
  const compareValue = input.length / 2;

  switch (filterMethod) {
    case 'most_common':
      if (summedInputColumns[position] > compareValue) {
        return findByBit(input, position, '1');
      } else if (summedInputColumns[position] === compareValue) {
        return findByBit(input, position, '1');
      } else {
        return findByBit(input, position, '0');
      }
      break;
    case 'least_common':
      if (summedInputColumns[position] > compareValue) {
        return findByBit(input, position, '0');
      } else if (summedInputColumns[position] === compareValue) {
        return findByBit(input, position, '0');
      } else {
        return findByBit(input, position, '1');
      }
      break;
    default:
      throw Error('not implemented');
  }
};

/**
 * Loops through each column of the input table (string[]).
 * removed either rows with the least common, or most common bit value
 * and repeats for each column.
 * @param {*} input input values, array of strings.
 * @param {*} suportSystem which filter criteria to use
 */
const calculateLifeSupportValues = (input, supportSystem, debug) => {
  let workingSet = Array.from(input);
  let position = 0;
  const criteria = supportSystem === 'oxygen' ? 'most_common' : 'least_common';

  if (debug) {
    console.log(
      `Getting ${supportSystem} values by selecting for ${criteria} flag at position`
    );
  }

  while (workingSet.length > 1) {
    workingSet = filterInputByCommonFlags(workingSet, position, criteria);
    if (debug) {
      console.log(
        `Checking position ${position} values, filtering by ${criteria}`
      );
    }
    position++;
  }

  return parseInt(workingSet[0], 2);
};

module.exports = {
  getPowerConsumption,
  calculateEpsilon,
  calculateGamma,
  getSlidingIncreaseCount,
  sumArrayMembers,
  sumArrayColumns,
  applyRow,
  applyMovement,
  applyMovementAim,
  calculateLifeSupportValues,
  findByBit,
  filterInputByCommonFlags,
  filledArray,
};
