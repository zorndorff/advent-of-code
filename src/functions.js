const sumArrayMembers = (inputs) => {
  return inputs.reduce((previousValue, coordsValue) => previousValue + coordsValue);
}

const getSlidingIncreaseCount = (readings, windowSize) => {
  let lastTotal;
  let nextTotal;
  let totalIncreasing = 0;
  let index = 0;

  while(index < readings.length - (windowSize - 1)){
    const nextInputs = readings.slice(index, index + windowSize);

    if(nextInputs.length > 0) nextTotal = sumArrayMembers(nextInputs);

    if (lastTotal && nextTotal > lastTotal) {
      totalIncreasing ++;
    }

    lastTotal = nextTotal;
    index++;
  }

  return totalIncreasing;
}

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
}


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
}

function filledArray(size, value) {
  return Array.apply(null, Array(size)).map(Number.prototype.valueOf,value);
}

const applyRow = (accumulator, row) => {
  let index = 0;
  for (const col of row) {
    if(col === '1'){
      accumulator[index] ++;
    }
    index ++;
  }
  return accumulator;
}

const sumArrayColumns = (input) => {
  const totals = filledArray(input[0].length, 0);
  debugger;
  return input.reduce((accumulator, row) => applyRow(accumulator, row), totals);
}

const calculateGamma = (input, setLength) => {
  const gamma = [];

  for (const col of input) {
    debugger;
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
}

const getPowerConsumption = (input) => {
  const summed = sumArrayColumns(input);
  const gamma = calculateGamma(summed, input.length);
  const epsilon = calculateEpsilon(summed, input.length);
  return gamma * epsilon;
}

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
};
