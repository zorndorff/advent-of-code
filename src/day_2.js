//https://adventofcode.com/2021/day/1/input

const { applyMovement } = require('./functions');

module.exports = {
  process: (inputs) => {
    const coords = {x: 0, depth: 0, aim: 0};

    for (const input of inputs) {
      const [cmd, value] = input.split(' ');
      applyMovement(coords, cmd, parseInt(value));
    }

    console.log(`Final ${JSON.stringify(coords)} ${coords.x * coords.depth}`);
  }
}