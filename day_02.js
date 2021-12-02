//https://adventofcode.com/2021/day/1/input

const readline = require('readline');

const { stdin:input, stdout:output } = require('process');

let rl; 

const readings = [];


const sumArrayMembers = (inputs) => {
  return inputs.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const getSlidingIncreaseCount = (readings, windowSize) => {
  let lastTotal;
  let nextTotal;
  let totalIncreasing = 0;
  
  while(readings.length > 0){
    const nextInputs = readings.splice(0, windowSize);

    if(nextInputs.length > 0) nextTotal = sumArrayMembers(nextInputs);

    if(!lastTotal) lastTotal = nextTotal;
    if(nextTotal > lastTotal) totalIncreasing ++;
  }

  return totalIncreasing;
}


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



module.exports = {
  getSlidingIncreaseCount,
  sumArrayMembers,
};
