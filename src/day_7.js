const { filledArray, sumArrayMembers } = require('./functions');

function calcFuelForPosition(inputs, position) {
  return inputs.reduce((acc, nextPosition) => {
    return acc + Math.abs(nextPosition - position);
  }, 0);
}

module.exports = {
  process: (inputs) => {
    const initialPositions = inputs[0]
      .split(',')
      .map((pos) => parseInt(pos, 10))
      .sort((a, b) => a - b);
    const positionCosts = initialPositions.map((pos) =>
      calcFuelForPosition(initialPositions, pos)
    )
    .sort((a, b) => a - b);
    console.log(`Min fuel cost ${positionCosts[0]}`)
    return positionCosts.shift();
  },
};
