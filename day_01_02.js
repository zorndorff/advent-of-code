//https://adventofcode.com/2021/day/1/input

const readline = require('readline');
const { getSlidingIncreaseCount } = require('./src');
const { stdin:input, stdout:output } = require('process');

let rl; 

const readings = [];

const processInput = () => {
  const list = [];

  rl = readline.createInterface({ input, output });

  rl.on('line', (input) => {
    list.push(parseInt(input));
  });

  rl.on('end', () => {
    console.log('input ended');
  })

  rl.on('close', () => {
    console.log('Done processing');
    console.log(`${getSlidingIncreaseCount(list, 3)}`);
  })
}


processInput();
