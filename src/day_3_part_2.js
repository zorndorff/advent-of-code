
const { calculateLifeSupportValues } = require('./functions');

module.exports = {
  process: (inputs, debug) => {
    
    const oxygenValue = calculateLifeSupportValues(inputs, 'oxygen', debug);
    const co2Value = calculateLifeSupportValues(inputs, 'co2', debug);

    console.log(`oxygen gen rating : ${oxygenValue}`);
    console.log(`co2 gen rating : ${co2Value}`);
    console.log(`life support rating: ${oxygenValue * co2Value}`)
  }
}