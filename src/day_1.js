let lastLine;
let increaseCounter = 0;

function isIncreasing(last, next) {
  return next > last;
}

module.exports = {
  process: (inputs) => {
    const coords = {x: 0, depth: 0, aim: 0};

    for (const input of inputs) {
      if (!lastLine) lastLine = input;
      if (isIncreasing(lastLine, parseInt(input))){
        increaseCounter ++;
      }
      lastLine = input;
    }

    console.log(`Final increase count ${increaseCounter}`);
  }
};