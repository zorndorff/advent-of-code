//https://adventofcode.com/2021/day/1/input
const { getSlidingIncreaseCount } = require('./src');

module.exports = {
  process: (inputs) => {
    const coords = {x: 0, depth: 0, aim: 0};
    const inputInts = inputs.map((input) => parseInt(input));

    console.log(`sliding increase count ${getSlidingIncreaseCount(inputInts, 3)}`);
  }
};