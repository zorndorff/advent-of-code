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
      coords.y += value;
    break;
    case 'up':
      coords.y += -value;
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
      coords.aim += value;
    break;
  }
  return coords;
}


module.exports = {
  getSlidingIncreaseCount,
  sumArrayMembers,
  applyMovement,
  applyMovementAim,
};
