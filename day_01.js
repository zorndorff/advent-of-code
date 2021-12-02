//https://adventofcode.com/2021/day/1/input

const readline = require('readline');

const { stdin:input, stdout:output } = require('process');

const rl = readline.createInterface({ input, output });
let lastLine;
let increaseCounter = 0;

function isIncreasing(last, next) {
  return next > last;
}

rl.on('line', (input) => {
  if (!lastLine) lastLine = input;
  console.log(`Received: ${input}, Last : ${lastLine}`);
  if (isIncreasing(lastLine, parseInt(input))){
    increaseCounter ++;
  }
  lastLine = input;
  console.log(`INCREASE COUNT ${increaseCounter}`);
});

rl.on('close', () => {
  console.log('Done processing');
})