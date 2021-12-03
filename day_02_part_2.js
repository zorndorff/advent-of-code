const { applyMovementAim } = require('./src');

module.exports = {
  process: (inputs) => {
    const coords = {x: 0, depth: 0, aim: 0};

    for (const input of inputs) {
      const [cmd, value] = input.split(' ');
      applyMovementAim(coords, cmd, parseInt(value));
    }

    console.log(`Final ${JSON.stringify(coords)} ${coords.x * coords.depth}`);
  }
}