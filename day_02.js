//https://adventofcode.com/2021/day/1/input

const readline = require('readline');
const { applyMovement } = require('./src');
const { stdin:input, stdout:output } = require('process');

let rl; 

const readings = [];

const processInput = () => {
  const coords = {x: 0, depth: 0, aim: 0};

  rl = readline.createInterface({ input, output });

  rl.on('line', (input) => {
    const [cmd, value] = input.split(' ');
    applyMovement(coords, cmd, parseInt(value));
  });

  rl.on('end', () => {
    console.log('input ended');
  })

  rl.on('close', () => {
    console.log('Done processing');
    console.log(`Final ${JSON.stringify(coords)} ${coords.x * coords.y}`);

  })
}


processInput();
