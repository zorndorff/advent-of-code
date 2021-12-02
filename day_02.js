//https://adventofcode.com/2021/day/1/input

const readline = require('readline');

const { stdin:input, stdout:output } = require('process');

let rl; 

const readings = [];

let increaseCounter = 0;

const sumArrayMembers = (inputs) => {
  return [];
  return inputs.reduce(() => {

  });
}

const getSlidingIncreaseCount = (inputs, windowSize) => {
  return false;
  while(inputs.length){
    inputs.splice(windowSize);
  }
}


const processInput = () => {
  rl = readline.createInterface({ input, output });

  rl.on('line', (input) => {
    readings.push(parseInt(input));
    console.log(`${readings.length}`);
  });

  rl.on('end', () => {
    console.log('input ended');
  })
  rl.on('close', () => {
    console.log('Done processing');
  })
}

processInput();



module.exports = {
  getSlidingIncreaseCount,
  sumArrayMembers,
};
