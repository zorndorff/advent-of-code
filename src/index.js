const sumArrayMembers = (inputs) => {
  return inputs.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const getSlidingIncreaseCount = (readings, windowSize) => {
  let lastTotal;
  let nextTotal;
  let totalIncreasing = 0;
  let index = 0;

  while(index < readings.length - (windowSize - 1)){
    const nextInputs = readings.slice(index, index + windowSize);

    if(nextInputs.length > 0) nextTotal = sumArrayMembers(nextInputs);

    if (!lastTotal){
      console.log('no previous value, no change');
    } else if (nextTotal > lastTotal) {
      totalIncreasing ++;
      console.log(`last: ${lastTotal} - next ${nextTotal} - increased`);
    } else {
      console.log(`last: ${lastTotal} - next ${nextTotal} - decreased`);
    }

    lastTotal = nextTotal;
    index++;
  }

  return totalIncreasing;
}

module.exports = {
  getSlidingIncreaseCount,
  sumArrayMembers,
};
